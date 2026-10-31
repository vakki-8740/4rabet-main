# Firebase Setup Guide — new project `rabet-60dae`

This project was moved from the old Firebase project `rbet-6770a` to the new one
`rabet-60dae`. The app code is already pointing at the new project — this file
lists everything that still has to be done **inside the Firebase Console** so the
site and the admin panel work exactly like they did on the old project.

> Config lives in one place only: `js/firebase-config.js`
> (copies: `4R-ADMIN/js/firebase-config.js`, `react-admin/public/js/firebase-config.js`,
> `react-admin/dist/js/firebase-config.js` — all four must stay identical).

---

## Current status (checked automatically)

| Item | Status | What it means |
|---|---|---|
| Web app config (`apiKey`, `appId`, …) | ✅ done | Already in `js/firebase-config.js` |
| Firestore reachable | ✅ reachable | Requests reach `rabet-60dae`; writes are currently rejected because the rules are not published yet |
| Firestore security rules | ❌ **pending** | Must paste + publish `firestore.rules` (Step 2) |
| Authentication (admin login) | ❌ **not enabled** | Console returns `CONFIGURATION_NOT_FOUND` — admin panel login cannot work until Step 3 |
| Admin user `4r@admin.com` | ❌ **pending** | Must be created in Authentication (Step 3) |
| Old data migrated | ⏳ optional | Old project data can be copied (Step 6) |

Live check that was run against the new project:

```
Firestore  → 403 PERMISSION_DENIED  (database present, rules not published yet)
Auth       → 400 CONFIGURATION_NOT_FOUND  (Authentication not set up yet)
```

---

## Step 1 — Firestore Database

1. Firebase Console → **Build → Firestore Database**
2. If it does not exist yet: **Create database** → *Production mode* → location
   (choose the region closest to your users, e.g. `asia-south1`) → Create
3. Leave the default rules for now — Step 2 replaces them.

**Collections are created automatically** by the app. Do not create them by hand.

| Collection | Created by | Contents |
|---|---|---|
| `complaints` | user panel (form submit) | complaint records + base64 images |
| `chats/{chatId}` | user panel (online chat) | chat header: name, last message, unread counts |
| `chats/{chatId}/messages` | user panel + admin panel | text / image / file messages |

**Indexes:** none needed. The app only uses single-field sorting:
`submittedAt desc`, `updatedAt desc`, `at asc` — Firestore handles these automatically.

---

## Step 2 — Publish the security rules (required)

1. Firebase Console → **Firestore Database → Rules**
2. Delete what is there and paste the whole content of **`firestore.rules`** from this repo
3. Press **Publish**

What the rules do (same as the old project):

- `complaints`
  - `create` → allowed for everyone (visitors submit without login)
  - `read` → **admin only**
  - `update` → admin only, and only the `status` + `statusAt` fields
  - `delete` → admin only
- `chats` + `chats/{id}/messages`
  - open read/create/update for the guest chat (the random chat id is the access key)
  - `delete` → admin only

> ⚠️ Known trade-off: the chat rules are open by design because users chat without
> an account. If you want it locked down later, the fix is to authenticate chat users
> anonymously and match on `request.auth.uid`.

---

## Step 3 — Authentication + the admin account (required)

The admin panel cannot log in until this is done.

1. Firebase Console → **Build → Authentication → Get started**
2. **Sign-in method** tab → **Email/Password** → *Enable* → Save
3. **Users** tab → **Add user**
   - Email: `4r@admin.com`  ← must match `firestore.rules` and the app code
   - Password: a strong password (keep it somewhere safe; it is **not** stored in the code)
4. (Optional) **Settings → Authorized domains**: add every domain the panel runs on —
   `localhost`, your hosting domain, and the preview domain you develop on.

The email is hardcoded in 4 places — if you ever change it, change all of them:

```
firestore.rules                    → adminEmail()
4R-ADMIN/firestore.rules           → adminEmail()   (same file, keep in sync)
4R-ADMIN/js/auth.js                → email()
react-admin/src/lib/fb.js          → ADMIN_EMAIL
```

---

## Step 4 — API key restrictions (recommended)

Firebase Console → ⚙️ **Project settings → General → Your apps → Web API key** →
Google Cloud Console → **APIs & Services → Credentials** → edit the browser key:

- **Application restrictions** → *HTTP referrers* → add your domains
  (e.g. `https://your-domain.com/*`, `http://localhost:8080/*`)
- **API restrictions** → limit to `Cloud Firestore API` + `Identity Toolkit API`

This keeps the key from being usable on other websites. (The key itself is public
by design — restrictions are what protect it.)

---

## Step 5 — Telegram alerts (not Firebase, but part of the setup)

Complaint alerts are sent by a Telegram bot. The bot token and chat id are **not**
in the code — they are entered in the admin panel:

1. Create a bot with [@BotFather](https://t.me/botfather) → copy the token
2. Get your chat id (message [@userinfobot](https://t.me/userinfobot), or `getUpdates`)
3. Admin panel → **Settings** → paste **Bot token** + **Chat id** → Save → **Send test**

Until this is set, complaints still save normally — only the alert is skipped.

---

## Step 6 — Move the old data (optional)

Old project: `rbet-6770a` (complaints + chats with messages).
New project: `rabet-60dae`.

`tools/migrate-firestore.js` copies everything without deleting the old data:

```bash
# backup only (safe, no writes)
node tools/migrate-firestore.js --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
  --dump=backup-4rbet.json --txt=backup-4rbet.txt

# copy old -> new (needs Step 2 rules published in the new project)
node tools/migrate-firestore.js --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
  --old-project=rbet-6770a --new-project=rabet-60dae \
  --dump=backup-4rbet.json --txt=backup-4rbet.txt
```

Reading the old project needs either temporarily `allow read: if true;` in the old
rules, or an admin ID token via `--old-token=...`.
Backup files are already excluded by `.gitignore` (`backup-*.json`, `backup-*.txt`).

---

## Step 7 — Verify (2 minutes)

After Steps 1–3, check these:

| Check | How | Expected |
|---|---|---|
| Rules published | Submit a test complaint from the site | Console shows no `permission-denied`; the record appears in Firestore |
| Complaint saved | Firestore → `complaints` | A new document with your test data |
| Admin login | Admin panel → login with `4r@admin.com` | Dashboard opens, complaint list loads |
| Status update | Change a complaint to *Previewing* → *Successful* | Firestore document updates; user Mailbox shows the new status |
| Live chat | Site → Online Chat → send a message | Message appears in `chats`; admin panel Room replies in real time |
| Offline behaviour | Turn off network and submit | Complaint is kept in the device cache and syncs later |

If a write fails with `permission-denied`, Step 2 was not published (or the admin
email in the rules does not match the logged-in user).

---

## What depends on Firebase vs what works offline

| Feature | Needs Firebase? | Fallback |
|---|---|---|
| Submitting a complaint | Yes (to reach the admin) | Saved in device `localStorage`, never lost |
| Mailbox (own complaints) | No | Reads the device cache instantly |
| Admin panel (all complaints) | Yes | Cached list, read-only |
| Online chat | Yes | Shows "offline" state, message can be retried |
| Telegram alert | No (Telegram API) | Queued and retried (max 25) |
