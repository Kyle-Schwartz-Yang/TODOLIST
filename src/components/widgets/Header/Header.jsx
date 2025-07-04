import { useState, useEffect } from "react";
// ----------------------------------------------------

// ----------------------------------------------------
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__title">
          ❌ <span>Pet</span> project
        </a>
        <div className="header__basket">basket</div>
      </div>
    </header>
  );
};

export default Header;
