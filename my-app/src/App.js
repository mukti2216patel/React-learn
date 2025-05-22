import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert , setAlert] = useState(null);
  const showAlert = (msg , type)=>{
     console.log("Showing alert:", msg, type);
      setAlert({
        message:msg,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; 
      showAlert("Dark mode enabled" , "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled" , "success");
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      <Alert alert = {alert}/>
      <Textform heading="Enter Text To Analyze Below" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
