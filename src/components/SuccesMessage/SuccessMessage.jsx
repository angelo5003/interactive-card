import React from "react";
import "./SuccessStyles.css";
import succesLogo from "../assets/images/icon-complete.svg";

const SuccessMessage = ({ setForm }) => {
  const handleClearInput = () => {
    setForm({
      cardnumber: "0000 0000 0000 0000",
      expdate: "",
      cardyear: "00/00",
      cvc: "123",
    });
  };
  return (
    <section className="succes_container">
      <div className="succes_info_container">
        <img src={succesLogo} alt="succes_logo" className="icon_complete" />
        <h2 className="succes_title">Thank you!</h2>
        <p className="succes_message">We've added your card details</p>
        <button className="submit_btn" onClick={handleClearInput}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default SuccessMessage;
