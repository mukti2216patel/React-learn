import React, { useState } from "react";


export default function Textform(props) {
  const [text, setText] = useState("enter text here");

  function handleOnChange(event) {
    setText(event.target.value);
    
  }

  function handleOnClick() {
    setText(text.toUpperCase());
    props.showAlert("Convert to UpperCase" , "success");
  }
  
  function handleClearClick() {
    setText("");
    props.showAlert("Text is clear" , "success");
  }

  function handleLoClick() {
    setText(text.toLowerCase());
    props.showAlert("Convert to LowerCase" , "success");
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
    props.showAlert("Text is copied to clipboard" , "success");
  }

  function handleRemoveSpacesClick() {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("All extra space is removed" , "success");
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
   <div className={`container d-flex flex-column justify-content-center align-items-center min-vh-100 text-${props.mode === 'light' ? 'black' : 'white'}`}>
      <div className="w-100" style={{ maxWidth: "720px" }}>
        <label htmlFor="inputTextArea" className="form-label h5">
          {props.heading}
        </label>
        <textarea
          id="inputTextArea"
          className="form-control mb-3"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' , color:props.mode==='light' ? 'black' : 'white'}}
        ></textarea>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className="btn btn-primary" onClick={handleOnClick}>
            Change to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLoClick}>
            Change to Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary" onClick={handleRemoveSpacesClick}>
            Remove Extra Spaces
          </button>
        </div>

        <div>
          <h5>Your Text Summary</h5>
          <p>
            {wordCount} words, {charCount} characters
          </p>
          <p>{readingTime} minutes to read</p>
          <h6>Preview</h6>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </div>
  );
}
