import React from "react";
import { BACKGROUND_COLORS } from "../helpers/constants";

const ColorPalette = ({ isColorPaletteShown, setIsColorPaletteShown }) => {
  if (isColorPaletteShown)
    return (
      <div className="colorBox">
        {BACKGROUND_COLORS.map((color, index) => {
          return (
            <button key={index} style={{ backgroundColor: color }}></button>
          );
        })}
      </div>
    );
};

export default ColorPalette;
