import React from "react";

const TextArea = ({ isTextAreaVisible, setIsTextAreaVisible }, props) => {
  if (isTextAreaVisible === true) {
    return (
      <div>
        <textarea
          name="description"
          value={props.description}
          placeholder="Take a Note.."
          // onChange={addItem}
        ></textarea>
      </div>
    );
  }
};

export default TextArea;
