import React from "react";
import TextArea from "./TextArea";

const ExpandedNote = ({
  isNoteExpanded,
  setIsNoteExpanded,
  noteData,
  onChange,
}) => {
  if (isNoteExpanded)
    return (
      <div className="expanded-note">
        <input
          type="text"
          name="title"
          onChange={onChange}
          placeholder="Title"
          value={noteData.title}
          onClick={() => {}}
        />
        <TextArea
          isTextAreaVisible={true}
          setIsTextAreaVisible={() => {}}
          data={noteData}
          onChange={onChange}
        />
      </div>
    );
};

export default ExpandedNote;
