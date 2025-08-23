// ----------------------------------------------------

// ----------------------------------------------------
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__title">
          T❤DO<span>LIST</span>
        </a>
        <div className="header__theme">THEME</div>
      </div>
    </header>
  );
};

export default Header;
