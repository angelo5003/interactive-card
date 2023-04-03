import React, { useState } from "react";
import mobileBackground from "../assets/images/bg-main-mobile.png";
import cardFront from "../assets/images/bg-card-front.png";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    cardnumber: 0,
    expdate: 0,
    cardyear: 0,
    cvc: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // destructure the name and value property from the e.target object.

    setForm({ ...form, [name]: value }); // setForm({ ...form, [name]: value }); is updating the form state with the new value of the input field. The { ...form } part is creating a copy of the current state of form (object), and the [name]: value part is updating the property with the same name as the input field (like "username" or "cardnumber") to the new value.
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      username: "",
      cardnumber: 0,
      expdate: 0,
      cardyear: 0,
      cvc: 0,
    });
    console.log(`your form has been submitted`);
  };

  return (
    <div className="form_container">
      <img src={mobileBackground} alt="background" className="background_img" />
      <img src={cardFront} alt="card-front" className="front_card" />
      <p className="card_number">{form.cardnumber}</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="title">CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="form_input"
        />

        <label className="title">CARD NUMBER</label>
        <input
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardnumber"
          value={form.cardnumber}
          onChange={handleChange}
          className="form_input"
        />

        <div className="card_dates">
          <label className="title">
            EXP.DATE
            <input
              type="number"
              placeholder="MM"
              name="expdate"
              value={form.expdate}
              onChange={handleChange}
              className="form_input_dates"
              id="form_input_expiry_date"
            />
          </label>

          <label className="title">
            (MM/YY)
            <input
              type="number"
              placeholder="YY"
              name="cardyear"
              value={form.cardyear}
              onChange={handleChange}
              className="form_input_dates"
              id="form_input_year_date"
            />
          </label>

          <label className="title">
            CVC
            <input
              type="number"
              placeholder="e.g. 123"
              name="cvc"
              value={form.cvc}
              onChange={handleChange}
              className="form_input_dates"
            />
          </label>
        </div>
        <button type="submit" className="submit_btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
