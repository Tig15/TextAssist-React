import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const handleDloadText = () => {
    const file = new Blob([text], {
      type: "text/plain",
    });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(
    "Enter Your Text Here"
  );
  // text = new text; Wrong Way
  // setText(text) Correct Way
  return (
    <>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="12"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#28282B" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
          ></textarea>
        </div>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleUpClick}
          disabled={text.length===0}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleLoClick}
          disabled={text.length===0}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleClearClick}
          disabled={text.length===0}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleCopyClick}
          disabled={text.length===0}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleExtraSpace}
          disabled={text.length===0}
        >
          Remove Extra Space
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 my-1 btn-sm`}
          onClick={handleDloadText}
          disabled={text.length===0}
        >
          Download Your Text
        </button>
      </div>

      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4> Your Text Summary: </h4>
        <p className="line d-inline">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          } words, {text.length} characters,
        </p>
        <p className="line d-inline">
          and {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} Minutes to Read!
        </p>

        <h4 className="prev my-2"> Preview: </h4>
        <p>{text.length > 0 ? text : "Enter Something Above in the Box"}</p>
      </div>
    </>
  );
}
