import React from "react";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Very very Carefully Chosen Tutors</h1>
      </div>{" "}
      <br />
      <br />
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>IGCSE - Mathematics</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>AS-A level</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>IBDP</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
