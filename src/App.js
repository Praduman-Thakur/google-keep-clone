import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import "./style.css";
import Note from "./components/Note";
import { useState } from "react";

function App(props) {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header />
      <CreateArea list={list} setList={setList} />
      {/* <Note list={list} setList={setList} /> */}

      <Footer />
    </div>
  );
}

export default App;
