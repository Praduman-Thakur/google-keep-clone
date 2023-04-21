import React from "react";
import { BACKGROUND_COLORS } from "../helpers/constants";

const ColorPalette = ({
  isColorPaletteShown,
  setIsColorPaletteShown,
  onColorChange,
  noteIndex,
}) => {
  if (isColorPaletteShown)
    return (
      <div className="colorBox">
        {BACKGROUND_COLORS.map((color, index) => {
          return (
            <button
              onClick={() => {
                onColorChange(noteIndex, color);
                setIsColorPaletteShown(false);
              }}
              key={index}
              style={{ backgroundColor: color }}
            ></button>
          );
        })}
      </div>
    );
};

export default ColorPalette;
