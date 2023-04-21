import React, { useState } from "react";
import "../style.css";

import Note from "./Note";
import TextArea from "./TextArea";

const CreateArea = () => {
  const [note, setNote] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [isTextAreaVisible, setIsTextAreaVisible] = useState(false);
  const showTextArea = () => {
    setIsTextAreaVisible(true);
  };
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
    setIsTextAreaVisible(false);
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
          onClick={showTextArea}
        />
        <TextArea
          isTextAreaVisible={isTextAreaVisible}
          setIsTextAreaVisible={setIsTextAreaVisible}
          data={data}
        />
        {/* <textarea
          name="description"
          value={data.description}
          placeholder="Take a Note.."
          onChange={addItem}
        ></textarea> */}

        <button onClick={addList}>Add</button>
      </form>
      {note.map((value, index) => {
        return (
          <div key={index} className="container">
            <div>
              <Note
                title={value.title}
                description={value.description}
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
