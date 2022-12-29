import React, { useContext } from "react";
import { NotificationItem } from "../../components/notificationItem/NotificationItem";
import { NotificationContext } from "../../context/notificationContext";
import { itemInterface } from "../../utils/utils";
import "./Main.scss";

export const Main = () => {
  const notifications = useContext(NotificationContext);

  return (
    <main className="notification-container">
      {notifications.map((item: itemInterface) => (
        <NotificationItem key={item.id} {...item} />
      ))}
    </main>
  );
};
