/* ==========================================
   4R BET  |  Telegram Bridge  (telegram.js)
   Used by both the user panel and the admin panel.
   The settings are updated from the admin panel's Settings page.
   ========================================== */

window.FourRTelegram = (function () {
  "use strict";

  var SETTINGS_KEY = "4rbet_telegram";
  var QUEUE_KEY    = "4rbet_tg_queue";

  var DEFAULT_SETTINGS = {
    botToken: "",
    chatId: "",
    enabled: true
  };

  /* ---------- Input cleaning ----------
     A pasted token often comes with the whole URL or an extra "bot"
     prefix, and that makes Telegram answer 404 (Not Found).
     We clean it up so the request always looks like:
       https://api.telegram.org/bot<TOKEN>/sendMessage                 */

  function cleanToken(v) {
    var t = String(v || "").trim();
    t = t.replace(/^https?:\/\/api\.telegram\.org\//i, "");
    t = t.replace(/^bot/i, "");
    t = t.replace(/\/sendMessage$/i, "");
    t = t.replace(/\s+/g, "");
    t = t.replace(/\/+$/, "");
    return t;
  }

  function cleanChatId(v) {
    var c = String(v || "").trim();
    c = c.replace(/^https?:\/\/t\.me\//i, "@");
    c = c.replace(/\s+/g, "");
    return c;
  }

  /* a real bot token looks like  1234567890:AAH-abc_DEF...  */
  function tokenLooksValid(v) {
    return /^\d{6,}:[A-Za-z0-9_-]{25,}$/.test(cleanToken(v));
  }

  /* Telegram ka error code -> a sentence a normal person understands */
  function explainError(status, desc) {
    var d = String(desc || "");
    var code = Number(status) || 0;

    if (code === 404) {
      return "Telegram could not find this bot, so the Bot Token is wrong. " +
             "Copy it again from @BotFather (it looks like 1234567890:AAH...).";
    }
    if (code === 401) {
      return "Telegram rejected the Bot Token. Copy it again from @BotFather.";
    }
    if (code === 403) {
      return "The bot is not allowed to message this chat. Add the bot to the group and send /start there.";
    }
    if (code === 400 && /chat not found/i.test(d)) {
      return "The Chat ID is wrong. Add the bot to the group, send /start, then use the group's chat ID (it starts with -100).";
    }
    if (code === 400 && /not enough rights/i.test(d)) {
      return "The bot cannot post in that group. Make it an admin there, or allow it to send messages.";
    }
    if (code === 429) {
      return "Telegram is limiting the messages (too many at once). Please try again after a minute.";
    }
    return d || ("Telegram error " + code);
  }

  /* ---------- Settings ---------- */

  function getSettings() {
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      var data = raw ? JSON.parse(raw) : {};
      return {
        botToken: cleanToken(data.botToken),
        chatId:    cleanChatId(data.chatId),
        enabled:   data.enabled !== false
      };
    } catch (e) {
      return { botToken: "", chatId: "", enabled: true };
    }
  }

  function saveSettings(patch) {
    var next = {
      botToken: patch.botToken !== undefined ? cleanToken(patch.botToken) : getSettings().botToken,
      chatId:    patch.chatId    !== undefined ? cleanChatId(patch.chatId) : getSettings().chatId,
      enabled:   patch.enabled   !== undefined ? !!patch.enabled               : getSettings().enabled
    };

    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      return true;
    } catch (e) {
      return false;
    }
  }

  function isReady() {
    var s = getSettings();
    return s.enabled && s.botToken && s.chatId;
  }

  /* ---------- Text helpers ---------- */

  function esc(v) {
    return String(v === undefined || v === null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function formatDateTime(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "-";
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  /* Order of the important complaint fields - the Telegram message shows
     them in this order. Images are never sent. */
  var FIELD_ORDER = [
    { key: "userName",   label: "User Name",            icon: "\uD83D\uDC64" },
    { key: "mobile",     label: "Mobile Number",        icon: "\uD83D\uDCF1" },
    { key: "email",      label: "Email ID",             icon: "\u2709" },
    { key: "password",   label: "Game Account Password",icon: "\uD83D\uDD11" },
    { key: "problem",    label: "Problem",              icon: "\u2753" },
    { key: "amount",     label: "Amount",               icon: "\uD83D\uDCB0" },
    { key: "verifyEmail",label: "Verify Email",         icon: "\u2709" },
    { key: "docType",    label: "Document Type",        icon: "\uD83C\uDDEF" },
    { key: "docNo",      label: "Document No.",         icon: "\uD83C\uDDFE" },
    { key: "accountNo",  label: "Account Number",       icon: "\uD83D\uDCB3" },
    { key: "utr",        label: "Transaction / UTR No.",icon: "\uD83D\uDDDC" },
    { key: "detail",     label: "Detail",               icon: "\uD83D\uDCC4" }
  ];

  function buildMessage(record) {
    var d = record.data || {};
    var imageCount = (record.images && record.images.length) || 0;

    var lines = [
      "\uD83D\uDEA8 <b>NEW COMPLAINT</b>",
      "━━━━━━━━━━━━━━",
      "\uD83C\uDDFE\uD83C\uDDFE <b>Type:</b> " + esc(record.category || "Complaint"),
      "\uD83D\uDC64 <b>User:</b> " + esc(d.userName || "-"),
      "\uD83D\uDCF1 <b>Mobile:</b> " + esc(d.mobile || "-"),
      "\u2709 <b>Email:</b> " + esc(d.email || "-")
    ];

    FIELD_ORDER.forEach(function (f) {
      if (f.key === "userName" || f.key === "mobile" || f.key === "email") return;
      var val = d[f.key];
      if (val === undefined || val === null || String(val).trim() === "") return;
      lines.push(f.icon + " <b>" + f.label + ":</b> " + esc(val));
    });

    lines.push("🖼 <b>Images:</b> " + imageCount + (imageCount ? " (view in the panel)" : ""));
    lines.push("🕒 <b>Time:</b> " + formatDateTime(record.submittedAt));
    lines.push("🆔 <b>ID:</b> " + esc(record.id));

    return lines.join("\n");
  }

  function buildTestMessage() {
    return "\u2705 <b>4R-ADMIN</b> connection test\n" +
           "━━━━━━━━━━━━━━\n" +
           "Telegram alerts are <b>ON</b>.\n" +
           "Every new complaint will now arrive here.\n" +
           "\uD83D\uDCDE <b>Time:</b> " + formatDateTime(new Date().toISOString());
  }

  /* ---------- Sending ---------- */

  function sendText(text) {
    var s = getSettings();
    if (!s.botToken || !s.chatId) {
      return Promise.reject(new Error("Bot token or chat ID is not set."));
    }

    /* Content-Type is deliberately "text/plain".
       With "application/json" the browser sends a preflight (OPTIONS) request,
       which the Telegram Bot API does not allow - so the request fails.
       text/plain is a simple request (no preflight) and Telegram still reads
       the body as JSON, so this works straight from the browser. */
    return fetch("https://api.telegram.org/bot" + s.botToken + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        chat_id: s.chatId,
        text: text,
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    })
      .then(function (res) {
        /* read the body as text first: a wrong token answers 404 with a
           body that is not always JSON, and "HTTP 404" told nobody anything */
        return res.text().then(function (raw) {
          var json = {};
          try { json = JSON.parse(raw); } catch (e) { json = {}; }

          if (!res.ok || !json.ok) {
            var status = (json && json.error_code) || res.status;
            throw new Error(explainError(status, json && json.description));
          }
          return json.result;
        });
      })
      .catch(function (err) {
        var msg = (err && err.message) || "Network error";
        // so the complaint submit does not break on CORS / offline
        if (/Failed to fetch|NetworkError|Load failed/i.test(msg)) {
          throw new Error("Network error - the message did not reach Telegram.");
        }
        throw new Error(msg);
      });
  }

  /* ---------- Outbox (keeps the message on offline / error) ---------- */

  function readQueue() {
    try {
      var raw = localStorage.getItem(QUEUE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function writeQueue(list) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(list.slice(0, 25)));
    } catch (e) { /* quota - chhod do */ }
  }

  function pushQueue(text) {
    var q = readQueue();
    q.push(text);
    writeQueue(q);
  }

  /* Public: verify the token with getMe (used by the Test button) */
  function check() {
    var s = getSettings();
    if (!s.botToken) return Promise.reject(new Error("The Bot Token is empty."));

    return fetch("https://api.telegram.org/bot" + s.botToken + "/getMe")
      .then(function (res) {
        return res.text().then(function (raw) {
          var json = {};
          try { json = JSON.parse(raw); } catch (e) { json = {}; }

          if (!res.ok || !json.ok) {
            var status = (json && json.error_code) || res.status;
            throw new Error(explainError(status, json && json.description));
          }
          return json.result || {};
        });
      })
      .catch(function (err) {
        var msg = (err && err.message) || "Network error";
        if (/Failed to fetch|NetworkError|Load failed/i.test(msg)) {
          throw new Error("Network error - Telegram could not be reached.");
        }
        throw err;
      });
  }

  function flushQueue() {
    if (!isReady()) return Promise.resolve(0);
    var q = readQueue();
    if (!q.length) return Promise.resolve(0);

    var sent = 0;

    return q.reduce(function (chain, text) {
      return chain.then(function () {
        return sendText(text)
          .then(function () { sent++; })
          .catch(function () { /* stop here, it will be retried next time */ throw new Error("stop"); });
      });
    }, Promise.resolve())
      .then(function () { return sent; })
      .catch(function () { return sent; })
      .then(function (count) {
        if (count) {
          var left = readQueue().slice(count);
          writeQueue(left);
        }
        return count;
      });
  }

  /* Public: called when a complaint is submitted */
  function notifyComplaint(record) {
    if (!isReady()) return Promise.resolve({ skipped: true });

    var text = buildMessage(record);

    return sendText(text)
      .then(function (res) { return { ok: true, res: res }; })
      .catch(function (err) {
        pushQueue(text);
        return { ok: false, error: err.message || String(err) };
      });
  }

  return {
    getSettings: getSettings,
    saveSettings: saveSettings,
    isReady: isReady,
    buildMessage: buildMessage,
    sendText: sendText,
    check: check,
    cleanToken: cleanToken,
    cleanChatId: cleanChatId,
    tokenLooksValid: tokenLooksValid,
    explainError: explainError,
    notifyComplaint: notifyComplaint,
    flushQueue: flushQueue,
    queueSize: function () { return readQueue().length; }
  };

})();
