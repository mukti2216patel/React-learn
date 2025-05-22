// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Textform from "./Components/Textform";
import About from "./Components/About";

function App() {
  // const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="Textutils" aboutText="About"/>
      {/* <Textform heading="Enter Text To Analyze Below" /> */}
      <About />
    </>
  );
}

export default App;
