import React from "react";

export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#28282B" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container">
      <h1
        className="heading my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item my-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong> Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextAssist is used to analyse your text by different features. It
              is simple to use and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item my-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Use For</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextAssist is a word counter application, where you can convert
              your words from lowercase to uppercase and vice versa. You can
              copy your manipulated text, and download your text.
            </div>
          </div>
        </div>
        <div className="accordion-item my-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatibility </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextAssist is a word counter with many feature is compatibile with
              Chrome, FireFox, Safari, Opera. It suits to count character in
              facebook,blog, email,etc.
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container my-4">
        <button className="btn btn-primary" onClick={toggleStyle}> {btnText}</button>
  </div>*/}
    </div>
  );
}
