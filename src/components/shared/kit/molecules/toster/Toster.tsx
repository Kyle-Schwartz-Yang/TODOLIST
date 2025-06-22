import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      limit={5}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover={true}
      hideProgressBar={false}
      newestOnTop={true}
      draggable
      style={{ top: "100px", right: "50px" }}
      theme="colored"
    />
  );
}
