import React, { useState } from "react";
import "../style.css";

import Note from "./Note";
import TextArea from "./TextArea";
import ExpandedNote from "./ExpandedNote";

const CreateArea = () => {
  const [notes, setNotes] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    backgroundColor: "white",
  });

  const [isNoteExpanded, setIsNoteExpanded] = useState(false);
  const [expandedNoteData, setExpandedNoteData] = useState(null);
  const [isTextAreaVisible, setIsTextAreaVisible] = useState(false);
  const showTextArea = () => {
    setIsTextAreaVisible(true);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addList = () => {
    setNotes((oldData) => {
      return [...oldData, data];
    });
    setData({
      title: "",
      description: "",
      backgroundColor: "white",
    });
    setIsTextAreaVisible(false);
  };
  const deleteItem = (id) => {
    setNotes((oldData) => {
      return oldData.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const onColorChange = (index, color) => {
    const updatedData = notes.map((data, i) =>
      i === index
        ? {
            ...data,
            backgroundColor: color,
          }
        : data
    );

    setNotes(updatedData);
  };

  const onNoteClick = (noteData) => {
    setIsNoteExpanded(true);
    setExpandedNoteData(noteData);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="title"
          onChange={onChange}
          placeholder="Title"
          value={data.title}
          onClick={showTextArea}
        />
        <TextArea
          isTextAreaVisible={isTextAreaVisible}
          setIsTextAreaVisible={setIsTextAreaVisible}
          data={data}
          onChange={onChange}
        />
        {/* <textarea
          name="description"
          value={data.description}
          placeholder="Take a Note.."
          onChange={addItem}
        ></textarea> */}

        <button onClick={addList}>Add</button>
      </form>
      {notes.map((note, index) => {
        return (
          <div key={index} className="container">
            <Note
              noteData={note}
              noteIndex={index}
              onDelete={deleteItem}
              onNoteClick={onNoteClick}
              onColorChange={onColorChange}
            />
          </div>
        );
      })}
      <ExpandedNote
        onChange={onChange}
        isNoteExpanded={isNoteExpanded}
        noteData={expandedNoteData}
        setIsNoteExpanded={setIsNoteExpanded}
      />
    </div>
  );
};

export default CreateArea;
