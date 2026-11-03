/* ==========================================================
   tools/php-lint.js  —  PHP syntax check (bina PHP binary ke)
   ----------------------------------------------------------
   Is sandbox/dev machine par PHP install nahi hota, isliye
   npm ka `php-parser` use karke saari .php files parse karte hain.

   Setup (ek baar):
       npm install --no-save php-parser
   Run:
       node tools/php-lint.js                 # api/ ki saari .php files
       node tools/php-lint.js api/src/Repo.php
   ========================================================== */

const fs = require("fs");
const path = require("path");

let parser;
try {
  parser = require("php-parser");
} catch (e) {
  console.error("php-parser nahi mila. Pehle: npm install --no-save php-parser");
  process.exit(2);
}

const engine = new parser({
  parser: { extractDoc: true, php7: true, locations: true },
  lexer: { all_tokens: true },
});

const ROOT = path.resolve(__dirname, "..");

function collect(target) {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === "node_modules" || e.name === ".git") continue;
        walk(f);
      } else if (e.name.endsWith(".php")) out.push(f);
    }
  };

  const st = fs.statSync(target);
  if (st.isDirectory()) walk(target);
  else out.push(target);
  return out;
}

const args = process.argv.slice(2);
const targets = args.length ? args : ["api"];

let files = [];
for (const t of targets) files = files.concat(collect(path.resolve(ROOT, t)));

let bad = 0;
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  try {
    engine.parseCode(src, f);
    console.log("OK   " + path.relative(ROOT, f));
  } catch (e) {
    bad++;
    console.log("FAIL " + path.relative(ROOT, f) + "  ->  " + e.message);
  }
}

console.log("\n" + (files.length - bad) + "/" + files.length + " files parse hue");
process.exit(bad ? 1 : 0);
