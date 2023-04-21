import React from "react";
const BACKGROUND_COLOR = ["green", "red", "blue", "orange", "purple"];

const ColorPalette = ({ isColorPaletteVisible, setIsColorPaletteVisible }) => {
  const convertBackgroundColor = () => {
    console.log("object");
  };
  if (isColorPaletteVisible === true)
    return (
      <div className="colorBox">
        {BACKGROUND_COLOR.map((color, index) => {
          return (
            <button
              style={{ backgroundColor: color }}
              key={index}
              onClick={convertBackgroundColor}
            ></button>
          );
        })}
      </div>
    );
};

export default ColorPalette;
