import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import "./style.css";
import Note from "./components/Note";
import { useState } from "react";

function App(props) {
  return (
    <div>
      <Header />
      <CreateArea />
      <Footer />
    </div>
  );
}

export default App;
