import React from "react";
import stylesd from "./Footer.module.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={stylesd.footer}>
        <div className="footer__container">
          <span>Made with love 🤍</span>
        </div>
      </footer>
    );
  }
}
