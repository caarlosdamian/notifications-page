import React from "react";
import { NotificationItem } from "../../components/notificationItem/NotificationItem";
import { data, itemInterface } from "../../utils/utils";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="notification-container">
      {data.map((item: itemInterface) => (
        <NotificationItem key={item.id} {...item} />
      ))}
    </main>
  );
};
