import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("The button is clicked.")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    //console.log("The button is clicked.")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    //console.log("The button is clicked.")
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const handleDloadText = () => {
    const file = new Blob([text], {
        type: 'text/plain'
    })
    const element = document.createElement('a')
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.txt'
    document.body.appendChild(element)
    element.click()

};


  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your Text Here");
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
          } mx-1 btn-sm`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 btn-sm`}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 btn-sm`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 btn-sm`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 btn-sm`}
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "light" : "dark"
          } mx-1 btn-sm`}
          onClick={handleDloadText}
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
          {" "}
          {text.split(" ").length} words, {text.length} characters,{" "}
        </p>
        <p className="line d-inline">
          {" "}
          and {0.008 * text.split(" ").length} Minutes to Read!
        </p>

        <h4 className="prev my-2"> Preview: </h4>
        <p>{text.length > 0 ? text : "Enter Something Above in the Box"}</p>
      </div>
    </>
  );
}
