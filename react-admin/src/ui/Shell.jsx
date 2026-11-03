import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../lib/auth.js";
import { watchChats } from "../lib/chat.js";

const BASE = import.meta.env.BASE_URL;

/* ---------- drawer icons (same look as the user panel menu) ---------- */
const Svg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MenuIcon = {
  home: (
    <Svg>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </Svg>
  ),
  chat: (
    <Svg>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.2a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.5-8.4 8.4 8.4 0 0 1 8.5 7.9Z" />
    </Svg>
  ),
  users: (
    <Svg>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  ),
  gear: (
    <Svg>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </Svg>
  ),
  panel: (
    <Svg>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </Svg>
  ),
  logout: (
    <Svg>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </Svg>
  ),
  install: (
    <Svg>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </Svg>
  )
};

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} 4R BET &mdash; All Rights Reserved</p>
    </footer>
  );
}

export function Header({ simple }) {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const wrap = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect(() => {
    const unsub = watchChats((list) => {
      let n = 0;
      list.forEach((c) => {
        n += Number(c.unreadAdmin || 0);
      });
      setUnread(n);
    });
    return () => unsub && unsub();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  /* lock page scroll while the drawer is open */
  useEffect(() => {
    document.body.classList.toggle("is-menu-open", open);
    return () => document.body.classList.remove("is-menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (target) => {
    if (target === "/") return path === "/";
    return path === target || path.startsWith(target + "/");
  };

  const logout = async (e) => {
    e.preventDefault();
    setOpen(false);
    if (!window.confirm("Log out of the admin panel?")) return;
    try {
      await signOut();
    } catch (err) {
      /* ignore */
    }
    navigate("/login", { replace: true });
  };

  return (
    <header className="site-header">
      <div
        className={"menu-backdrop" + (open ? " is-open" : "")}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <div className="header-inner adm-header">
        <div className="menu-wrap" ref={wrap}>
          <button
            type="button"
            className={"menu-btn" + (open ? " is-open" : "")}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="menuDrop"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={"menu-drop" + (open ? " is-open" : "")}
            id="menuDrop"
            aria-label="Admin menu"
          >
            <div className="menu-head">
              <img
                className="menu-logo"
                src={BASE + "FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg"}
                alt="4R-ADMIN"
              />
              <button type="button" className="menu-close" aria-label="Close menu" onClick={closeMenu}>
                &times;
              </button>
            </div>

            <div className="menu-list">
            {simple ? (
              <a className="menu-item" href="../index.html">
                {MenuIcon.panel}
                <span>User Panel</span>
              </a>
            ) : (
              <>
                <Link
                  className={"menu-item" + (isActive("/") ? " is-active" : "")}
                  to="/"
                  onClick={closeMenu}
                >
                  {MenuIcon.home}
                  <span>Home</span>
                </Link>
                <Link
                  className={"menu-item" + (isActive("/chats") ? " is-active" : "")}
                  to="/chats"
                  onClick={closeMenu}
                >
                  {MenuIcon.chat}
                  <span>Chats</span>
                  {unread > 0 && <span className="menu-badge">{unread > 99 ? "99+" : unread}</span>}
                </Link>
                <Link
                  className={"menu-item" + (isActive("/visitors") ? " is-active" : "")}
                  to="/visitors"
                  onClick={closeMenu}
                >
                  {MenuIcon.users}
                  <span>Visitors</span>
                </Link>
                <Link
                  className={"menu-item" + (isActive("/settings") ? " is-active" : "")}
                  to="/settings"
                  onClick={closeMenu}
                >
                  {MenuIcon.gear}
                  <span>Settings</span>
                </Link>

                <div className="menu-sep" aria-hidden="true" />

                <a className="menu-item" href="../index.html">
                  {MenuIcon.panel}
                  <span>User Panel</span>
                </a>
                <a className="menu-item" href="#" data-install style={{ display: "none" }}>
                  {MenuIcon.install}
                  <span>Install App</span>
                </a>
                <a className="menu-item" href="#" onClick={logout}>
                  {MenuIcon.logout}
                  <span>Logout</span>
                </a>
              </>
            )}
            </div>

            <div className="menu-foot">
              <strong>4R BET Admin Panel</strong>
              <br />
              Complaints, live chat and settings in one place.
            </div>
          </nav>
        </div>

        <Link className="logo" to={simple ? "/login" : "/"}>
          <img
            className="logo-img adm-logo"
            src={BASE + "FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg"}
            alt="4R-ADMIN"
          />
        </Link>
      </div>
    </header>
  );
}

export default function Shell({ children, simple, footer = true }) {
  return (
    <>
      <Header simple={simple} />
      {children}
      {footer && <Footer />}
    </>
  );
}
