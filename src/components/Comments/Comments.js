import "./Comments.css";
import Comment from "../Comment/Comment";
import React, { useContext } from "react";
import { CommentsContext } from "../../Context";

export default function Comments() {
  const { state } = useContext(CommentsContext);
  if (state.length) {
    return (
      <div className="comments-container">
        <div className="comments">
          {state.map(comment => (
            <Comment comment={comment} key={comment.comment} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>loading comments.....</div>;
  }
}
