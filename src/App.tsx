import React, { useReducer } from "react";
import { Home } from "./pages/home/Home";
import "./index.scss";
import {
  NotificationContext,
  NotificationDispatchContext,
} from "./context/notificationContext";
import { data, itemInterface } from "./utils/utils";

function App() {
  function notificationReducer(notifications: any, action: any) {
    switch (action.type) {
      case "toggleState": {
        const newArr = notifications.map((item: itemInterface) => {
          return { ...item, read: true };
        });
        return newArr;
      }

      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  const [notifications, dispatch] = useReducer(notificationReducer, data);
  return (
    <NotificationContext.Provider value={notifications}>
      <NotificationDispatchContext.Provider value={dispatch}>
        <div className="app">
          <Home />
        </div>
      </NotificationDispatchContext.Provider>
    </NotificationContext.Provider>
  );
}

export default App;
