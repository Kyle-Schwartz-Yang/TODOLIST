import unicorn from "@shared/assets/images/unicorn.png";
// -------------------------------------
import "./Placeholder.scss";

export default function Placeholder() {
  return (
    <figure className="image-caption">
      <img src={unicorn} alt={unicorn} loading="lazy" />
      <figcaption className="scanner-block">
        <p>I love it when a plan comes together</p>
      </figcaption>
    </figure>
  );
}
