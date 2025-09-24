import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="footer__container">
        <h2 className={style.footerTitle}>Made with love 🤍</h2>
      </div>
    </footer>
  );
}
