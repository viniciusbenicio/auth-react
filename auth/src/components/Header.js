import React from "react";
// import logo from '../images/logo.png'
export const Header = () => {
  return (
    <nav>
      <div className="container"></div>
      <a href="/" className="navigation-brand">
        <img src="{logo}" alt="logo" />
      </a>
    </nav>
  );
};