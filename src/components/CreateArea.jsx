import React, { useState } from "react";
import "../style.css";

import Note from "./Note";

const CreateArea = () => {
  const [note, setNote] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const addItem = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addList = () => {
    setNote((oldData) => {
      return [...oldData, data];
    });
    setData({
      title: "",
      description: "",
    });
  };
  const deleteItem = (id) => {
    setNote((oldData) => {
      return oldData.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="title"
          onChange={addItem}
          placeholder="Title"
          value={data.title}
        />
        <textarea
          name="description"
          value={data.description}
          placeholder="Take a Note.."
          onChange={addItem}
        ></textarea>
        <button onClick={addList}>Add</button>
      </form>
      {note.map((value, index) => {
        return (
          <div className="container">
            <div>
              <Note
                title={value.title}
                description={value.description}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreateArea;
