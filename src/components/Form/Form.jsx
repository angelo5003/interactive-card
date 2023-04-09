import React, { useState } from "react";
import "./Form.css";
import SuccessMessage from "../SuccesMessage/SuccessMessage";

const Form = () => {
  const [form, setForm] = useState({
    cardnumber: "0000 0000 0000 0000",
    expdate: "",
    cardyear: "00/00",
    cvc: "123",
  });

  const [successMessage, setSuccesMessage] = useState(false);

  const [user, setUser] = useState({
    username: "Jane Appleseed",
  });

  const showSuccesMessage = () => {
    setSuccesMessage(!successMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // destructure the name and value property from the e.target object.

    setUser({ ...user, [name]: value });

    setForm({ ...form, [name]: +value }); //  is updating the form state with the new value of the input field. The { ...form } part is creating a copy of the current state of form (object), and the [name]: value part is updating the property with the same name as the input field (like "username" or "cardnumber") to the new value. The + sign for the value is turning a string value to a number
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({
      username: "Jane Appleseed",
    });
    setForm({
      cardnumber: "0000 0000 0000 0000",
      expdate: "",
      cardyear: "00/00",
      cvc: "123",
    });
    showSuccesMessage();
    console.log(`your form has been submitted`);
  };

  return (
    <div className="form_container">
      <div className="background_container"></div>
      <div className="card_back_container">
        <p className="card_cvc">{form.cvc}</p>
      </div>
      <div className="card_front_container">
        <div className="card_brand"></div>
        <div className="card_small_brand"></div>
        <div className="card_front_inner_container">
          <p className="card_number">{form.cardnumber}</p>
          <div className="card_dates_inner_container">
            <p className="card_owner">{user.username}</p>
            <p className="card_exp_date">{form.expdate}</p>
            <p className="card_card_year">{form.cardyear}</p>
          </div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {successMessage ? (
          <SuccessMessage />
        ) : (
          <>
            <label className="title">CARDHOLDER NAME</label>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              name="username"
              value={user.username === "Jane Appleseed" ? "" : user.username} // compare if the state is equal to the default value, if it is change it to an empty string and show the new typed value
              onChange={handleChange}
              className="form_input"
              required
            />

            <label className="title">CARD NUMBER</label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              name="cardnumber"
              value={
                form.cardnumber === "0000 0000 0000 0000" ? "" : form.cardnumber
              }
              onChange={handleChange}
              className="form_input"
              required
            />

            <div className="card_dates">
              <label className="title">
                EXP.DATE
                <input
                  type="text"
                  placeholder="MM"
                  name="expdate"
                  value={form.expdate}
                  onChange={handleChange}
                  className="form_input_dates"
                  id="form_input_expiry_date"
                  required
                />
              </label>

              <label className="title">
                (MM/YY)
                <input
                  type="text"
                  placeholder="YY"
                  name="cardyear"
                  value={form.cardyear === "00/00" ? "" : form.cardyear}
                  onChange={handleChange}
                  className="form_input_dates"
                  id="form_input_year_date"
                  required
                />
              </label>

              <label className="title">
                CVC
                <input
                  type="text"
                  placeholder="e.g. 123"
                  name="cvc"
                  value={form.cvc === "123" ? "" : form.cvc}
                  onChange={handleChange}
                  className="form_input_dates"
                  required
                />
              </label>
            </div>
            <button type="submit" className="submit_btn">
              Confirm
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
