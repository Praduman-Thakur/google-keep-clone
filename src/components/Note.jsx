import React, { useState } from "react";
import ColorPalette from "./ColorPalette";

const Note = (props) => {
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const colorPalette = () => {
    return setIsColorPaletteVisible(!isColorPaletteVisible);
  };
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={colorPalette}>Color</button>
      <ColorPalette
        isColorPaletteVisible={isColorPaletteVisible}
        setIsColorPaletteVisible={setIsColorPaletteVisible}
      />
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
