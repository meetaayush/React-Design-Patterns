import React from "react";
import { Link } from "react-router-dom";

import Checkbox from "./components/Checkbox";
import Switch from "./components/switch";

const Pattern2 = () => {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <Checkbox>
        {({ on, toggle }) => (
          <>
            {on ? "Checkbox is selected" : "Checkbox is not selected"}
            <Switch on={on} onChange={toggle} />
            <button onClick={toggle}>{on ? "On" : "Off"}</button>
          </>
        )}
      </Checkbox>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Pattern2;
