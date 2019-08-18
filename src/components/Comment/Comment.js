import React from "react";
import Gravatar from "react-gravatar";
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment flex align-center">
      <div>
        <Gravatar className="avatar" email={comment.email} />
      </div>
      <div className="flex column width-adj">
        <div className="flex space-between align-center">
          <div className="email-container">{comment.email}</div>
          <div className="flex rating-container">
            <div className="flex align-center">
              <img
                src={require("../../assets/star.png")}
                alt="rating"
                className="rating-star"
              />
            </div>
            <div>{comment.rating}</div>
          </div>
        </div>
        <div className="comment-content">{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
