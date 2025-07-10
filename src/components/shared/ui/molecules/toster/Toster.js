import { jsx as _jsx } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Toster() {
    return (_jsx(ToastContainer, { position: "top-right", autoClose: 1000, limit: 5, closeOnClick: true, pauseOnFocusLoss: true, pauseOnHover: true, hideProgressBar: false, newestOnTop: true, draggable: true, style: { top: "100px", right: "50px" }, theme: "colored" }));
}
