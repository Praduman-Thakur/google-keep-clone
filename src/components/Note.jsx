import React, { useState } from "react";
import ColorPalette from "./ColorPalette";

const Note = ({
  noteData,
  onDelete,
  onColorChange,
  noteIndex,
  onNoteClick,
}) => {
  const [isColorPaletteShown, setIsColorPaletteShown] = useState(false);

  const toggleColorPalette = () => {
    setIsColorPaletteShown(!isColorPaletteShown);
  };
  return (
    <div class="note" style={{ backgroundColor: noteData.backgroundColor }}>
      <h1 onClick={() => onNoteClick(noteData)}>{noteData.title}</h1>
      <p onClick={() => onNoteClick(noteData)}>{noteData.description}</p>
      <button onClick={toggleColorPalette}>Color</button>
      <ColorPalette
        isColorPaletteShown={isColorPaletteShown}
        setIsColorPaletteShown={setIsColorPaletteShown}
        onColorChange={onColorChange}
        noteIndex={noteIndex}
      />
      <button
        onClick={() => {
          onDelete(noteIndex);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
