import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter text here");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleOnClick() {
    setText(text.toUpperCase());
  }

  function handleClearClick() {
    setText("");
  }

  function handleLoClick() {
    setText(text.toLowerCase());
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  }

  function handleRemoveSpacesClick() {
    setText(text.replace(/\s+/g, " ").trim());
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
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
        ></textarea>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className="btn btn-primary" onClick={handleOnClick}>
            Change to Uppercase
          </button>
          <button className="btn btn-secondary" onClick={handleLoClick}>
            Change to Lowercase
          </button>
          <button className="btn btn-secondary" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-success" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-warning" onClick={handleRemoveSpacesClick}>
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
