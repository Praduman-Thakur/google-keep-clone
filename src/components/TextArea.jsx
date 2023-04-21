import React from "react";

const TextArea = (props) => {
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
};

export default TextArea;
