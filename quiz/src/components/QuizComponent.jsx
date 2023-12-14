import React from "react";
import "./QuizComponent.css";

export default class QuizComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="main">
          <div className="mainContainer">
            <h1>Question</h1>
            <p>1 / 15</p>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>

            <div className="optionContainer">
              <button className="options">option</button>
              <button className="options">option</button>
              <button className="options">option</button>
              <button className="options">option</button>
            </div>

            <div className="otherButtons">
              <button>P R E V I O U S</button>
              <button>N E X T</button>
              <button>Q U I T</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
