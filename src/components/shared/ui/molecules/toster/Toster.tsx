import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={700}
      limit={3}
      pauseOnFocusLoss
      pauseOnHover={true}
      hideProgressBar={false}
      newestOnTop={true}
      draggable
      style={{ top: "100px", right: "50px" }}
      theme="dark"
      transition={Bounce}
    />
  );
}

// Slide
// Bounce
