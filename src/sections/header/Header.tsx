import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <section className="left-container">
        <p className="left-label">Notifications</p>
        <p className="left-number">5</p>
      </section>
      <section className="right-container">
        <p className="right-label">Mark all as read</p>
      </section>
    </header>
  );
};
