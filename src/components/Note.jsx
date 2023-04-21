import React, { useState } from "react";
import ColorPalette from "./ColorPalette";

const Note = (props) => {
  const [initialColor, setInitialColor] = useState("");
  const changeColor = () => {
    return (
      <div style={{ backgroundColor: "orange" }}>
        <ColorPalette />
      </div>
    );
  };

  return (
    <div class="note" style={{ backgroundColor: { initialColor } }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={changeColor}>Color</button>
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
