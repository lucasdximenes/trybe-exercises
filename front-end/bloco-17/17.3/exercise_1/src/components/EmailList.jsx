import React, { useState, useEffect } from "react";
import emailList from "../data/emailList";
import "../styles/EmailList.css";
import { READ, UNREAD } from "../constants";

function EmailList() {
  const [emails, setEmails] = useState(emailList);

  useEffect(() => {
    if (emails.every((email) => email.status === READ)) {
      alert("All emails have been read");
    }
  }, [emails]);

  const markAsRead = (id) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        email.status = READ;
      }
      return email;
    });
    setEmails(newEmails);
  };

  const markAsUnread = (id) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        email.status = UNREAD;
      }
      return email;
    });
    setEmails(newEmails);
  };

  const markAllAsRead = () => {
    const newEmails = emails.map((email) => {
      email.status = READ;
      return email;
    });
    setEmails(newEmails);
  };

  const markAllAsUnread = () => {
    const newEmails = emails.map((email) => {
      email.status = UNREAD;
      return email;
    });
    setEmails(newEmails);
  };

  return (
    <div className="email-list-container">
      <header className="email-list-header">
        <h1>My Email List</h1>
      </header>

      <div className="mark-buttons-container">
        <button
          type="button"
          className="mark-all-read-button"
          onClick={markAllAsRead}
          disabled={emails.every((email) => email.status === READ)}
        >
          Mark All As Read
        </button>
        <button
          type="button"
          className="mark-all-unread-button"
          onClick={markAllAsUnread}
          disabled={emails.every((email) => email.status === UNREAD)}
        >
          Mark All As Unread
        </button>
      </div>

      <div className="email-list">
        {emails.map(({ id, title, status }) => (
          <div key={id} className="email-list-item">
            <div className="email-list-item-title">
              <span
                className="email-list-item-title-text"
                style={{
                  color: status ? "gray" : "black",
                }}
              >
                {title}
              </span>
            </div>
            <div className="email-list-item-mark-buttons-container">
              <button
                type="button"
                className="email-list-item-mark-read-button"
                onClick={() => markAsRead(id)}
                disabled={status === READ}
              >
                Mark As Read
              </button>
              <button
                type="button"
                className="email-list-item-mark-unread-button"
                onClick={() => markAsUnread(id)}
                disabled={status === UNREAD}
              >
                Mark As Unread
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmailList;
