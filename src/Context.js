import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      let newComment = action.payload;
      return state.concat(newComment);

    case "SET_COMMENTS":
      return action.payload;

    default:
      return state;
  }
};

const initialState = [];

const CommentsContext = React.createContext(initialState);
function CommentsProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommentsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CommentsContext.Provider>
  );
}
export { CommentsContext, CommentsProvider };
