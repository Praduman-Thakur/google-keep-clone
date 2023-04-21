import React, { useState } from "react";
import ColorPalette from "./ColorPalette";

const Note = (props) => {
  const [isColorPaletteShown, setIsColorPaletteShown] = useState(false);

  const toggleColorPalette = () => {
    setIsColorPaletteShown(!isColorPaletteShown);
  };
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={toggleColorPalette}>Color</button>
      <ColorPalette
        isColorPaletteShown={isColorPaletteShown}
        setIsColorPaletteShown={setIsColorPaletteShown}
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
