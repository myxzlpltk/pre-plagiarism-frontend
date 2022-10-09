import React from "react";

const HighlightPopup = ({ comment }) => {
  if (comment.text) {
    return (
      <div className="Highlight__popup">
        {comment.emoji} {comment.text}
      </div>
    );
  } else {
    return null;
  }
};

export default HighlightPopup;
