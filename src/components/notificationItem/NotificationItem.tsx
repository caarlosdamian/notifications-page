import React from "react";
import { itemInterface } from "../../utils/utils";
import "./NotificationItem.scss";

export const NotificationItem = (item: itemInterface) => {
  return (
    <section
      className={`notification-wrapper ${item.read === false && "unread"}`}
    >
      <div className="notification-left-container">
        <img className="notification-img" src={item.avatar} alt={`${item.name}-avatar`} />
      </div>
      <div className="notification-middle-container">
        <div
          className={`notification-middle-text-container ${
            item.read === false && "unread"
          }`}
        >
          <strong className="text-name">{item.name}</strong>
          <span className="text-action"> {item.action}</span>
          <span className="hightlight"> {item.hightlight} </span>
        </div>
        <div className="notification-middle-time-container">
          <span className="time-label">{item.time}</span>
        </div>
        {item.ismessage && (
          <div className="notification-middle-message">
            <span className="notification-message">{item.message}</span>
          </div>
        )}
      </div>
      {item.secondImg !== "" && (
        <div className="notification-right-container">
          {<img src={item.secondImg} alt="second-img" className="second-img" />}
        </div>
      )}
    </section>
  );
};
