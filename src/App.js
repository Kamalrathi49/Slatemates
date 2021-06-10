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
              <li>Mathematics Core/Extended </li>
              <li>International Mathematics </li>
              <li>Additional Mathematics</li>
             
            </ul>
          </div>
          <div className="col">
            <h1>AS-A level</h1>
            <ul>
              <li>Mathematics 9709</li>
              <li>Mathematics Further 9231</li>
             
            </ul>
          </div>
          <div className="col">
            <h1>IBDP</h1>
            <ul>
              <li>Mathematics AA SL</li>
              <li>Mathematics AA HL</li>
              <li>Mathematics AI SL</li>
              <li>Mathematics AI HL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
