// ----------------------------------------------------
import { useTheme } from "@app/providers/ThemeProvider";
// ----------------------------------------------------
import style from "./Header.module.scss";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("theme:", theme);

  return (
    <header className={style.header}>
      <div className={`header__container ${style.headerContainer}`}>
        <a href="/" className={style.headerLogo} onClick={toggleTheme}>
          T❤DO<span>LIST</span>
        </a>
        <label className={style.switch}>
          <input
            className={style.checkbox}
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className={`${style.slider} ${style.round}`}></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
