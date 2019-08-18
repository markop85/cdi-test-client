import React, { useEffect, useState, useRef, useContext } from "react";
import { CommentsContext } from "./Context";
import Comments from "./components/Comments/Comments";
import Form from "./components/Form/Form";
import InputField from "./components/InputField/InputField";
import "./App.css";
import axios from "axios";
import _ from "lodash";

export default function App() {
  const [filter, setFilter] = useState({ email: "" });
  const { dispatch } = useContext(CommentsContext);
  const debounce = useRef(_.debounce(filter => fetchComments(filter), 500));

  const filterInput = {
    class: "search-box",
    placeholder: "Filter",
    type: "text"
  };
  const handleChange = event => {
    setFilter({ email: event.target.value });
  };

  const fetchComments = async debouncedFilter => {
    let result = await axios.post("/getComments", debouncedFilter);
    return dispatch({
      type: "SET_COMMENTS",
      payload: result.data
    });
  };

  useEffect(() => {
    debounce.current(filter);
  }, [filter]);

  return (
    <div className="App flex justify-center">
      <div className="main-container">
        <Form />
        <InputField inputData={filterInput} handleChange={handleChange} />
        <Comments />
      </div>
    </div>
  );
}
