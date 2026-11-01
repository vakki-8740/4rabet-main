# Project Instructions

## Auto-push to GitHub (IMPORTANT)

Repo: https://github.com/vakki-8740/4rbet (branch: `main`, remote: `origin`)

After **every** change made to files in this project, immediately commit and push
to GitHub automatically — do NOT ask the user for confirmation.

Steps:

```bash
cd '/storage/emulated/0/workpleace/4rbet-main'
git add -A
git commit -m "<short description of the change>"
git pull --rebase origin main
git push origin main
```

Rules:

- Never commit secrets, tokens, or API keys.
- If `.gitignore` doesn't cover generated files/logs, ask before adding them.
- If a push fails (auth/network), fix it and retry; report the failure to the user.
- Keep commit messages short and in the style of the change (e.g. `fix: deposit page typos`).

## Keep both panels in sync (IMPORTANT)

The user panel (root files) and the admin panels (`4R-ADMIN/` and `react-admin/`) share one
design system and several shared modules. Whenever a change touches something that exists in
both places, apply it to the admin panels in the same commit:

- **Shared CSS:** `css/style.css` → `4R-ADMIN/css/style.css`, `react-admin/public/css/style.css`
- **Shared JS:** `js/firebase-db.js`, `js/telegram.js`, `js/firebase-config.js`
  → the copies in `4R-ADMIN/js/` and `react-admin/public/js/` must stay identical
- **UI patterns:** header, left drawer menu, cards, toasts, empty states and error notes
  should behave and look the same in the user panel and the admin panels
- **Build:** after editing anything in `react-admin/src/` or `react-admin/public/`, run
  `npm run build` inside `react-admin/` so the committed `dist/` matches the source

Always write user-facing copy in English (no Hinglish), in both panels.

## Reporting changes back to the user

After every batch of work, finish the reply with one clean, scannable list of **everything**
that changed — never bury it in paragraphs:

- one emoji per line, then what changed in plain language, then the file(s) touched
- group the items in the same order the work was done
- mark what was **tested** (browser check, build, syntax) and what is still **pending**
- keep the wording simple and non-technical; the user reads this list to know what to verify
