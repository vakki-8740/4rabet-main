import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../lib/auth.js";
import { watchChats } from "../lib/chat.js";
import { IconPhone } from "./icons.jsx";

const BASE = import.meta.env.BASE_URL;

export function DesktopNote() {
  return (
    <div className="adm-desktop-note">
      <IconPhone />
      The admin panel is designed for mobile &mdash; open it on your phone for the best experience.
    </div>
  );
}

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
              <a className="menu-item" href="../index.html">User Panel</a>
            ) : (
              <>
                <Link
                  className={"menu-item" + (isActive("/") ? " is-active" : "")}
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  className={"menu-item" + (isActive("/chats") ? " is-active" : "")}
                  to="/chats"
                  onClick={closeMenu}
                >
                  Chats
                  {unread > 0 && <span className="menu-badge">{unread > 99 ? "99+" : unread}</span>}
                </Link>
                <Link
                  className={"menu-item" + (isActive("/settings") ? " is-active" : "")}
                  to="/settings"
                  onClick={closeMenu}
                >
                  Settings
                </Link>
                <a className="menu-item" href="../index.html">User Panel</a>
                <a className="menu-item" href="#" data-install style={{ display: "none" }}>
                  Install App
                </a>
                <a className="menu-item" href="#" onClick={logout}>Logout</a>
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
      <DesktopNote />
      <Header simple={simple} />
      {children}
      {footer && <Footer />}
    </>
  );
}
