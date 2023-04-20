import React from "react";

const Note = (props) => {
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
