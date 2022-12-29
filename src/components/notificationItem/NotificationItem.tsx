import React from "react";
import { itemInterface } from "../../utils/utils";
import "./NotificationItem.scss";

export const NotificationItem = (item: itemInterface) => {
  return (
    <section className={`notification-wrapper ${item.read === false && 'unread'}`}>
      <div className="notification-left-container">
        <img className="notification-img" src={item.avatar} alt="" />
      </div>
      <div className="notification-middle-container">
        <div className={`notification-middle-text-container ${item.read === false && 'unread' }`}>
          {/* <p className="text-labels"> */}
            <strong className="text-name">{item.name}</strong>
            <span className="text-action"> {item.action}</span>
            <span className="hightlight"> {item.hightlight} </span>
            {/* {item.read === false && <div className="circle"></div>} */}
          {/* </p> */}
        </div>
        <div className="notification-middle-time-container">
          <span className="time-label">{item.time}</span>
        </div>
        <div className="notification-middle-message"></div>
      </div>
      <div className="notification-right-container"></div>
    </section>
  );
};
