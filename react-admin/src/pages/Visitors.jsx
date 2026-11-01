import { useEffect, useMemo, useState } from "react";
import Shell from "../ui/Shell.jsx";
import { useToast } from "../ui/Toast.jsx";
import {
  watchVisitors,
  visitorStats,
  exportVisitorsCsv,
  fmtWhen,
  shortId
} from "../lib/visitors.js";

/* ---------- icons used only on this page ---------- */

const IcoUsers = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IcoClock = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v10l3 2" />
    <circle cx="12" cy="12" r="9.5" />
  </svg>
);

const IcoCheck = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const IcoEyeOff = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <path d="m2 2 20 20" />
  </svg>
);

const FILTERS = [
  { id: "all", label: "All" },
  { id: "complained", label: "Complained" },
  { id: "visit_only", label: "Visit only" }
];

export default function Visitors() {
  const toast = useToast();

  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    const unsub = watchVisitors(
      (rows) => {
        setList(rows);
        setLoading(false);
        setError("");
      },
      (msg) => {
        setError(msg);
        setLoading(false);
      }
    );

    return () => unsub && unsub();
  }, []);

  const stats = useMemo(() => visitorStats(list), [list]);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();

    return list.filter((v) => {
      if (filter === "complained" && !v.complained) return false;
      if (filter === "visit_only" && v.complained) return false;
      if (!needle) return true;

      return (v.name + " " + v.vid + " " + v.device + " " + v.browser + " " + v.os)
        .toLowerCase()
        .includes(needle);
    });
  }, [list, filter, q]);

  const onCsv = () => {
    exportVisitorsCsv(rows);
    toast("Visitor list exported");
  };

  return (
    <Shell>
      <main className="adm">
        <div className="adm-head">
          <h1>Visitors</h1>
          <p>Everyone who opened the site &mdash; and who sent a complaint.</p>
        </div>

        <section className="adm-stats adm-stats--4">
          <div className="adm-stat">
            <span className="adm-stat-ico"><IcoUsers /></span>
            <b>{stats.total}</b>
            <small>Total Visitors</small>
          </div>

          <div className="adm-stat adm-stat--today">
            <span className="adm-stat-ico"><IcoClock /></span>
            <b>{stats.today}</b>
            <small>Today</small>
          </div>

          <div className="adm-stat adm-stat--ok">
            <span className="adm-stat-ico"><IcoCheck /></span>
            <b>{stats.complained}</b>
            <small>Sent a Complaint</small>
          </div>

          <div className="adm-stat">
            <span className="adm-stat-ico"><IcoEyeOff /></span>
            <b>{stats.visitOnly}</b>
            <small>Visit Only</small>
          </div>
        </section>

        <section className="adm-box">
          <div className="adm-box-head">
            <h2>All Visitors</h2>
            <span>{stats.total}</span>
          </div>

          <div className="adm-tools">
            <div className="adm-chips">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={"adm-chip" + (filter === f.id ? " is-active" : "")}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <input
              type="search"
              className="adm-search"
              placeholder="Search name, device, browser..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="adm-box-body">
            {loading ? (
              <div className="adm-empty">
                <h3>Loading visitors...</h3>
              </div>
            ) : error ? (
              <div className="adm-empty">
                <h3>Could not load visitors</h3>
                <p>{error}</p>
                <p style={{ marginTop: 10, fontSize: 13 }}>
                  Publish the latest <b>firestore.rules</b> so the admin can read the{" "}
                  <b>visitors</b> collection.
                </p>
              </div>
            ) : !list.length ? (
              <div className="adm-empty">
                <div className="adm-empty-ico"><IcoUsers /></div>
                <h3>No visitors recorded yet</h3>
                <p>Open the user panel once and this page will start filling up.</p>
                <a className="btn" href="../index.html">Open User Panel</a>
              </div>
            ) : !rows.length ? (
              <div className="adm-empty">
                <h3>Nothing matches</h3>
                <p>Try another filter or search word.</p>
              </div>
            ) : (
              rows.map((v) => {
                const pages = v.pages.filter((p) => p !== "index.html").length;

                return (
                  <div className="adm-vis" key={v.id}>
                    <div className="adm-vis-top">
                      <span className="adm-vis-name">
                        {v.name || "Guest " + shortId(v.vid)}
                      </span>

                      {v.complained ? (
                        <span className="adm-vis-tag is-yes">
                          Complained{v.complaints > 1 ? " (" + v.complaints + ")" : ""}
                        </span>
                      ) : (
                        <span className="adm-vis-tag">Visit only</span>
                      )}
                    </div>

                    <div className="adm-vis-meta">
                      <span>{v.device || "-"}</span>
                      <span>{v.browser || "-"}</span>
                      <span>{v.os || "-"}</span>
                    </div>

                    <div className="adm-vis-meta adm-vis-meta--soft">
                      <span>{v.visits}{v.visits === 1 ? " visit" : " visits"}</span>
                      <span>{pages}{pages === 1 ? " page" : " pages"}</span>
                      <span>Last: {fmtWhen(v.lastSeen)}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="adm-form" style={{ paddingTop: 0 }}>
            <button
              type="button"
              className="btn btn--ghost"
              style={{ width: "100%" }}
              onClick={onCsv}
              disabled={!rows.length}
            >
              Export as CSV
            </button>
          </div>
        </section>

        <p
          className="adm-note"
          style={{ border: "1px solid var(--line)", borderRadius: 8, marginTop: 14 }}
        >
          Each browser counts as one visitor &mdash; no IP address or location is stored.
          One device can send up to <b>5 complaints per day</b>; when a visitor sends more
          than one, the count is shown next to the tag.
        </p>
      </main>
    </Shell>
  );
}
