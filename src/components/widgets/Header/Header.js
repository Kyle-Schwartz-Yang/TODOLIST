import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ----------------------------------------------------
// ----------------------------------------------------
import "./Header.scss";
const Header = () => {
    return (_jsx("header", { className: "header", children: _jsxs("div", { className: "header__container", children: [_jsxs("a", { href: "/", className: "header__title", children: ["T\u2764DO", _jsx("span", { children: "LIST" })] }), _jsx("div", { className: "header__basket", children: "basket" })] }) }));
};
export default Header;
