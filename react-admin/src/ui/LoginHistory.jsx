import { useEffect, useState } from "react";
import { listLogins, MAX_PER_DAY } from "../lib/logins.js";
import { fmtWhen } from "../lib/visitors.js";

function Badge({ result }) {
  if (result === "success") return <span className="adm-log-tag is-ok">Success</span>;
  if (result === "blocked") return <span className="adm-log-tag is-warn">Limit hit</span>;
  return <span className="adm-log-tag is-bad">Failed</span>;
}

export default function LoginHistory() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    listLogins(12).then((list) => {
      if (!alive) return;
      setRows(list);
      setLoading(false);
    });

    return () => {
      alive = false;
    };
  }, []);

  const today = new Date().toDateString();

  const usedToday = rows.filter(
    (e) => e.result === "success" && new Date(e.at).toDateString() === today
  ).length;

  const lastSuccess = rows.find((e) => e.result === "success");

  return (
    <section className="adm-box" style={{ marginBottom: 14 }}>
      <div className="adm-box-head">
        <h2>Login History</h2>
        <span>{MAX_PER_DAY} / DAY</span>
      </div>

      <div className="adm-hint">
        Every admin login is saved here, and the panel allows{" "}
        <b>{MAX_PER_DAY} logins per day</b>. Blocked attempts are saved too, so you can
        always see who tried.
      </div>

      <div className="adm-set-row">
        <span className="adm-row-k">
          Logins Today
          <small>Successful logins since midnight</small>
        </span>
        <span
          className="adm-set-val"
          style={{ color: usedToday >= MAX_PER_DAY ? "var(--no)" : "" }}
        >
          {loading ? "-" : usedToday}
        </span>
      </div>

      <div className="adm-set-row">
        <span className="adm-row-k">
          Last Login
          <small>Most recent successful login</small>
        </span>
        <span className="adm-set-val" style={{ fontSize: 13.5 }}>
          {lastSuccess ? fmtWhen(lastSuccess.at) : "-"}
        </span>
      </div>

      <div className="adm-log-list">
        {loading ? null : !rows.length ? (
          <div className="adm-empty" style={{ padding: "22px 0" }}>
            <h3>No logins recorded yet</h3>
            <p>Every login (and every blocked attempt) is saved here.</p>
          </div>
        ) : (
          rows.map((e) => {
            const dev = [e.device, e.browser].filter(Boolean).join(" / ");

            return (
              <div className="adm-log" key={e.id}>
                <div className="adm-log-main">
                  <span className="adm-log-time">{fmtWhen(e.at)}</span>
                  <Badge result={e.result} />
                </div>
                <div className="adm-log-sub">
                  {dev || "Unknown device"}
                  {e.os ? " \u00b7 " + e.os : ""}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="adm-note" style={{ borderTop: "1px solid var(--line)" }}>
        To reset today&apos;s counter, open Firebase Console &rarr; Firestore &rarr;{" "}
        <b>adminLogins</b> and delete today&apos;s documents.
      </div>
    </section>
  );
}
