import classNames from "classnames";
import "./ButtonOrLink.scss";
// =================================================================================================

const ButtonOrLink = ({ isLink, children, ...props }) => {
  return (
    <>
      {isLink ? (
        <Link {...props}>{children}</Link>
      ) : (
        <Button {...props}>{children}</Button>
      )}
    </>
  );
};

export default ButtonOrLink;

// =================================================================================================

const getButtonClass = (custom, isLong) => {
  return classNames("button", {
    button__main: custom === "main",
    button__secondary: custom === "secondary",
    button__long: isLong,
  });
};
// =================================================================================================

const Button = ({ custom, isLong, onClick, label, children, ...props }) => {
  const customClass = getButtonClass(custom, isLong);

  return (
    <button type="button" onClick={onClick} className={customClass} {...props}>
      {/* <div className="inner">{label}</div> */}
      {children}
    </button>
  );
};
// =================================================================================================
const Link = ({ href, onClick, isLong, custom, label, children, ...props }) => {
  const customClass = getButtonClass(custom, isLong);

  return (
    <a
      href={href}
      target="_blank"
      onClick={onClick}
      className={customClass}
      {...props}
    >
      {/* <div className="inner">{label}</div> */}
      {children}
    </a>
  );
};
// =================================================================================================

/*
  <ButtonOrLink isLink={false} custom="secondary">
    <div className="inner">Wiki</div>
  </ButtonOrLink>

  <ButtonOrLink isLink={true} href="https://www.google.com.ua" custom="main">
    <div className="inner">Google</div>
  </ButtonOrLink>
*/
