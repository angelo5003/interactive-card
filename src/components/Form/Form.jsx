import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form>
        <label>CARDHOLDER NAME</label>
        <input type="text" placeholder="e.g. Jane Appleseed" />
        <label>CARD NUMBER</label>
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
        <label>EXP.DATE</label>
        <input type="text" placeholder="MM" />
        <label>(MM/YY)</label>
        <input type="number" placeholder="YY" />
        <label>CVC</label>
        <input type="number" placeholder="e.g. 123" />
      </form>
    </div>
  );
};

export default Form;
