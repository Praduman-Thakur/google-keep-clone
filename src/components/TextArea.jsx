import React from "react";

const TextArea = ({
  isTextAreaVisible,
  setIsTextAreaVisible,
  data,
  onChange,
}) => {
  if (isTextAreaVisible) {
    return (
      <div>
        <textarea
          name="description"
          value={data.description}
          placeholder="Take a Note.."
          onChange={onChange}
          // onChange={addItem}
        ></textarea>
      </div>
    );
  }
};

export default TextArea;
