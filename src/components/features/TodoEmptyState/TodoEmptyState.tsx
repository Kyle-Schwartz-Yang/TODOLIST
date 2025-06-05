import doit from "@shared/assets/images/doit.png";

// -------------------------------------
import "./TodoEmptyState.scss";

export default function TodoEmptyState() {
  return (
    <figure className="image-caption">
      <img src={doit} alt={doit} loading="lazy" />
      <figcaption className="scanner-block">
        <div className="scanner-line"></div>
        <p>I love it when a plan comes together</p>
      </figcaption>
    </figure>
  );
}
