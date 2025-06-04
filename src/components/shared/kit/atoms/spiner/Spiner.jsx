import { Component } from "react";
import "./spiner.scss";

export default class Spiner extends Component {
  render() {
    return (
      <>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }
}
