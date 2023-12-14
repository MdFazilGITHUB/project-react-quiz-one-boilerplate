import React from "react";
import "./HomeComponent.css";

export default class HomeComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="home">
          <h1>Quiz App</h1>
          <button>P L A Y</button>
        </div>
      </>
    );
  }
}
