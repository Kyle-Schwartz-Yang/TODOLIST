import React from "react";
import "./Checklist.scss";

const Checklist = () => {
  return (
    <div id="checklist">
      <input defaultChecked value="1" name="r" type="checkbox" id="01" />
      <label htmlFor="01">Bread</label>
    </div>
  );
};

export default Checklist;
