import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ADMIN_NAME, formatDateTime, shortTime, userName } from "../lib/admin.js";
import {
  deleteChat,
  editMessage,
  getChat,
  isOnline,
  markRead,
  readFile,
  readImage,
  send,
  watchChat,
  watchMessages
} from "../lib/chat.js";
import Shell from "../ui/Shell.jsx";
import Avatar from "../ui/Avatar.jsx";
import { useToast } from "../ui/Toast.jsx";
import {
  IconArrowDown,
  IconBack,
  IconFile,
  IconImage,
  IconPencil,
  IconTrash,
  IconX
} from "../ui/icons.jsx";

export default function Room() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [offline, setOffline] = useState(false);
  const [popup, setPopup] = useState(null);
  const [editing, setEditing] = useState(null); /* { id, text } */
  const [showLatest, setShowLatest] = useState(false);

  const boxRef = useRef(null);
  const stick = useRef(true);
  const first = useRef(true);
  const imageIn = useRef(null);
  const fileIn = useRef(null);

  useEffect(() => {
    document.body.classList.add("adm-room-page");
    return () => document.body.classList.remove("adm-room-page");
  }, []);

  useEffect(() => {
    let alive = true;

    getChat(id).then((res) => {
      if (alive && res.chat) setChat(res.chat);
    });

    const unsubChat = watchChat(id, (c) => {
      if (!alive || !c) return;
      setChat(c);
      if (Number(c.unreadAdmin || 0) > 0) markRead(id, "admin");
    });

    const unsubMsgs = watchMessages(id, (list, online) => {
      if (!alive) return;
      setOffline(!online);
      if (online) setMessages(list);
    });

    return () => {
      alive = false;
      if (unsubChat) unsubChat();
      if (unsubMsgs) unsubMsgs();
    };
  }, [id]);

  const atBottom = () => {
    const b = boxRef.current;
    if (!b) return true;
    return b.scrollHeight - b.scrollTop - b.clientHeight < 90;
  };

  const toBottom = (smooth) => {
    const b = boxRef.current;
    if (!b) return;
    try {
      b.scrollTo({ top: b.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    } catch (e) {
      b.scrollTop = b.scrollHeight;
    }
  };

  const onScroll = () => {
    const bottom = atBottom();
    stick.current = bottom;
    setShowLatest(!bottom);
  };

  useEffect(() => {
    if (messages.length && stick.current) {
      toBottom(!first.current);
      first.current = false;
    }
  }, [messages]);

  useEffect(() => {
    if (!window.visualViewport) return;
    const onResize = () => {
      setTimeout(() => {
        if (stick.current) toBottom(false);
      }, 80);
    };
    window.visualViewport.addEventListener("resize", onResize);
    return () => window.visualViewport.removeEventListener("resize", onResize);
  }, []);

  const doSend = (msg) => {
    setBusy(true);
    return send(id, msg).then((res) => {
      setBusy(false);
      if (!res.ok) toast(res.error || "Message was not sent", true);
      return res;
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const val = text.trim();
    if (!val) return;

    if (!isOnline()) {
      toast("You are offline. Please check your internet connection.");
      return;
    }

    setText("");
    doSend({ who: "admin", text: val, name: ADMIN_NAME });
  };

  const pickImage = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;

    readImage(f)
      .then((out) => doSend({ who: "admin", image: out.dataUrl, fileName: out.name, name: ADMIN_NAME }))
      .catch((err) => toast(err.message || "Image was not sent"));
  };

  const pickFile = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;

    readFile(f)
      .then((out) =>
        doSend({ who: "admin", fileName: out.name, fileData: out.dataUrl, name: ADMIN_NAME })
      )
      .catch((err) => toast(err.message || "File was not sent"));
  };

  const remove = () => {
    if (!window.confirm("Delete this user's entire chat?")) return;
    deleteChat(id).then((res) => {
      if (res.ok) navigate("/chats", { replace: true });
      else toast(res.error || "Could not delete the chat");
    });
  };

  const openPopup = (m) => {
    setPopup({ m, time: formatDateTime(m.at) });
  };

  const startEdit = (m) => {
    setPopup(null);
    setEditing({ id: m.id, text: m.text || "" });
  };

  const saveEdit = () => {
    if (!editing || busy) return;
    const val = String(editing.text || "").trim();
    if (!val) {
      toast("The message cannot be empty");
      return;
    }

    setBusy(true);
    editMessage(id, editing.id, val).then((res) => {
      setBusy(false);
      if (res && res.ok) {
        setEditing(null);
        toast("Message updated");
      } else {
        toast((res && res.error) || "Could not update the message");
      }
    });
  };

  const name = chat ? userName(chat) : "Loading...";
  const meta = chat
    ? "Chat ID: " +
      String(chat.id || id).slice(0, 6).toUpperCase() +
      " \u00b7 " +
      shortTime(chat.updatedAt || chat.createdAt)
    : offline
    ? "Offline \u2014 check your internet"
    : "Chat khul rahi hai";

  return (
    <Shell footer={false}>
      <main className="adm-room">
        <div className="adm-room-bar">
          <Link className="adm-back adm-back--ico" to="/chats" aria-label="Back to chats">
            <IconBack />
          </Link>

          <Avatar className="adm-ava adm-ava--sm" />

          <div className="adm-room-who">
            <strong>{name}</strong>
            <small>{meta}</small>
          </div>

          <button
            type="button"
            className="adm-room-del"
            title="Delete chat"
            aria-label="Delete chat"
            onClick={remove}
          >
            <IconTrash />
          </button>
        </div>

        <div className="chat-messages adm-room-msgs" ref={boxRef} onScroll={onScroll}>
          {!messages.length ? (
            <div className="adm-room-empty">
              <p>No messages yet.</p>
              <small>Send a reply from below.</small>
            </div>
          ) : (
            messages.map((m) => {
              const mine = m.who === "admin";

              return (
                <div
                  key={m.id}
                  className={
                    "msg " +
                    (mine ? "msg--user" : "msg--agent") +
                    (m.image || m.fileName ? " msg--file" : "")
                  }
                  role="button"
                  tabIndex={0}
                  onClick={() => openPopup(m)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPopup(m);
                    }
                  }}
                >
                  <span className="msg-name">{mine ? "You (Support)" : name}</span>

                  {m.image ? (
                    <>
                      <img className="msg-image" src={m.image} alt={m.fileName || "image"} />
                      <span className="msg-file-cap">{m.fileName || "Photo"}</span>
                    </>
                  ) : m.fileName ? (
                    <>
                      <span className="msg-file-ico">
                        <IconFile size={20} />
                      </span>
                      {m.fileData ? (
                        <a
                          className="msg-file-name"
                          href={m.fileData}
                          download={m.fileName}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {m.fileName}
                        </a>
                      ) : (
                        <span className="msg-file-name">{m.fileName}</span>
                      )}
                    </>
                  ) : editing && editing.id === m.id ? (
                    <div
                      className="msg-edit"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <textarea
                        className="msg-edit-box"
                        value={editing.text}
                        rows={Math.min(6, Math.max(2, Math.ceil(editing.text.length / 34)))}
                        autoFocus
                        onChange={(e) => setEditing({ id: editing.id, text: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            saveEdit();
                          }
                          if (e.key === "Escape") setEditing(null);
                        }}
                      />
                      <div className="msg-edit-acts">
                        <button
                          type="button"
                          className="msg-edit-save"
                          disabled={busy}
                          onClick={saveEdit}
                        >
                          {busy ? "Saving..." : "Save"}
                        </button>
                        <button
                          type="button"
                          className="msg-edit-cancel"
                          onClick={() => setEditing(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="msg-text">{m.text || ""}</p>
                      {m.editedAt && <span className="msg-edited">edited</span>}
                      <button
                        type="button"
                        className="msg-edit-btn"
                        title="Edit message"
                        aria-label="Edit message"
                        onClick={(e) => {
                          e.stopPropagation();
                          startEdit(m);
                        }}
                      >
                        <IconPencil size={14} />
                      </button>
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>

        <button
          type="button"
          className={"chat-latest" + (showLatest ? " is-show" : "")}
          aria-label="Latest messages"
          onClick={() => {
            toBottom(true);
            stick.current = true;
            setShowLatest(false);
          }}
        >
          <IconArrowDown />
        </button>

        <div className="chat-actions">
          <button type="button" className="chat-act" title="Send image" onClick={() => imageIn.current && imageIn.current.click()}>
            <IconImage />
            <span>Image</span>
          </button>

          <button type="button" className="chat-act" title="Send file or PDF" onClick={() => fileIn.current && fileIn.current.click()}>
            <IconFile />
            <span>File / PDF</span>
          </button>

          <input
            ref={imageIn}
            type="file"
            accept="image/*"
            hidden
            onChange={pickImage}
          />
          <input
            ref={fileIn}
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
            hidden
            onChange={pickFile}
          />
        </div>

        <form className="chat-input" onSubmit={submit}>
          <input
            type="text"
            placeholder="Type your reply..."
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn--send" disabled={busy}>
            Send
          </button>
        </form>

        {popup && (
          <div
            className="modal-backdrop is-open"
            onClick={(e) => {
              if (e.target === e.currentTarget) setPopup(null);
            }}
          >
            <div className="modal chat-popup">
              <button type="button" className="popup-x" aria-label="Close" onClick={() => setPopup(null)}>
                <IconX />
              </button>
              <h3 className="modal-title chat-popup-title">
                {popup.m.who === "admin" ? "Your Message" : name}
              </h3>
              <p className="chat-popup-when">
                <strong>Sent:</strong> {popup.time}
              </p>
              <div className="chat-popup-body">
                {popup.m.image ? (
                  <>
                    <img className="popup-img" src={popup.m.image} alt={popup.m.fileName || "image"} />
                    <p className="popup-file-name">{popup.m.fileName || ""}</p>
                  </>
                ) : (
                  <p className="popup-text">{popup.m.text || popup.m.fileName || ""}</p>
                )}
              </div>
              {!popup.m.image && popup.m.text ? (
                <button
                  type="button"
                  className="btn btn--block popup-edit"
                  onClick={() => startEdit(popup.m)}
                >
                  Edit this message
                </button>
              ) : null}

              <button type="button" className="btn btn--block popup-close" onClick={() => setPopup(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </Shell>
  );
}
