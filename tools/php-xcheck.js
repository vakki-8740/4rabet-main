/* ==========================================================
   tools/php-xcheck.js  —  symbol cross-check
   ----------------------------------------------------------
   PHP parse hona kaafi nahi: galti se `Uploads::EXT_MIME` ya
   `$store->dir()` jaisa undefined symbol likh diya jaaye to wo
   runtime par fatal error deta hai. Ye script har `Class::member`
   aur `$obj->method()` call ko codebase me defined symbols se
   milati hai.

   Run:  node tools/php-xcheck.js          (api/ folder)
   Note: PHP ki built-in classes (FilesystemIterator, RecursiveIteratorIterator
         wagairah) "UNKNOWN CLASS" dikhengi - wo false positive hain.
   ========================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TARGET = path.resolve(ROOT, process.argv[2] || "api");

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".git") continue;
      walk(f);
    } else if (e.name.endsWith(".php")) files.push(f);
  }
})(TARGET);

const defined = {};   // Class -> Set(method/const)
const props = {};     // Class -> Set(property)

for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  let cur = null;

  for (const ln of s.split("\n")) {
    const cm = ln.match(/^(?:final\s+|abstract\s+)?class\s+(\w+)/);
    if (cm) {
      cur = cm[1];
      defined[cur] = defined[cur] || new Set();
      props[cur] = props[cur] || new Set();
    }
    if (!cur) continue;

    const mm = ln.match(/^\s*(?:public|private|protected)?\s*(?:static\s+)?function\s+(\w+)/);
    if (mm) defined[cur].add(mm[1]);

    const pm = ln.match(/^\s*(?:public|private|protected)\s+(?:static\s+)?\$(\w+)/);
    if (pm) props[cur].add(pm[1]);

    const cn = ln.match(/^\s*const\s+(\w+)/);
    if (cn) defined[cur].add(cn[1]);
  }
}

/* jo symbols hamare codebase ki classes ke nahi hain (PHP built-ins) */
const IGNORE_CLASSES = new Set([
  "FilesystemIterator", "RecursiveIteratorIterator", "RecursiveDirectoryIterator",
  "RuntimeException", "Exception", "Throwable", "DateTime", "PDO", "mysqli",
  "stdClass", "SplFileObject", "DirectoryIterator", "GlobIterator",
]);

let problems = 0;

for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  const rel = path.relative(ROOT, f);

  for (const m of s.matchAll(/\b([A-Z]\w+)::(\$?\w+)/g)) {
    const [, cls, mem] = m;
    if (IGNORE_CLASSES.has(cls)) continue;
    if (!defined[cls]) { console.log("UNKNOWN CLASS   " + cls + "            in " + rel); problems++; continue; }
    if (mem.startsWith("$")) {
      if (!props[cls].has(mem.slice(1))) { console.log("UNKNOWN PROP    " + cls + "::" + mem + "   in " + rel); problems++; }
    } else if (!defined[cls].has(mem)) {
      console.log("UNKNOWN METHOD  " + cls + "::" + mem + "()  in " + rel); problems++;
    }
  }
}

/* $obj->method() : var -> class mapping (new X() ya typed params se) */
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  const rel = path.relative(ROOT, f);
  const varTypes = {};

  for (const m of s.matchAll(/\$(\w+)\s*=\s*new\s+(\w+)/g)) varTypes[m[1]] = m[2];
  for (const m of s.matchAll(/function\s+\w+\s*\(([^)]*)\)/g)) {
    for (const pm of m[1].matchAll(/(\w+)\s+\$(\w+)/g)) varTypes[pm[2]] = pm[1];
  }

  for (const m of s.matchAll(/\$(\w+)->(\w+)\s*\(/g)) {
    const t = varTypes[m[1]];
    if (!t || !defined[t]) continue;
    if (!defined[t].has(m[2])) {
      console.log("UNKNOWN CALL    " + t + "->" + m[2] + "()       in " + rel);
      problems++;
    }
  }
}

console.log(problems ? "\n" + problems + " problem(s)" : "\nsymbol cross-check: clean");
process.exit(problems ? 1 : 0);
