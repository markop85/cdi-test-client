import "./Form.css";
import InputField from "../InputField/InputField";
import axios from "axios";
import React, { useState, useContext } from "react";
import { CommentsContext } from "../../Context";

export default function Form() {
  const [formValues, setFormValues] = useState({});
  const { dispatch } = useContext(CommentsContext);

  const ratingInput = {
    label: "Rating",
    placeholder: "Pick 1-5",
    type: "number",
    name: "rating"
  };
  const commentInput = {
    label: "Comment",
    placeholder: "Add Yout Comment",
    type: "text",
    name: "comment"
  };
  const emailInput = {
    label: "Email Address",
    placeholder: "Enter Email",
    type: "text",
    name: "email"
  };
  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const submitForm = async () => {
    let result = await axios.post("/addComments", formValues);
    if (result.status === 200) {
      return dispatch({ type: "ADD_COMMENT", payload: result.data.ops[0] });
    }
  };

  return (
    <div className="Form-container">
      <InputField inputData={emailInput} handleChange={handleChange} />
      <InputField inputData={commentInput} handleChange={handleChange} />
      <InputField inputData={ratingInput} handleChange={handleChange} />
      <button className="submit" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}
