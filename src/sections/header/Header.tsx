import React, { useContext } from "react";
import {
  NotificationContext,
  NotificationDispatchContext,
} from "../../context/notificationContext";
import { itemInterface } from "../../utils/utils";
import "./Header.scss";

export const Header = () => {
  const dispatch = useContext(NotificationDispatchContext);
  const notifications = useContext(NotificationContext);

  const count = notifications?.reduce((acc, item: itemInterface) => {
    if (item.read === false) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <header className="header-container">
      <section className="left-container">
        <p className="left-label">Notifications</p>
        <p className="left-number">{count}</p>
      </section>
      <section className="right-container">
        <p
          className="right-label"
          onClick={() =>
            dispatch({
              type: "toggleState",
              notifications,
            })
          }
        >
          Mark all as read
        </p>
      </section>
    </header>
  );
};
