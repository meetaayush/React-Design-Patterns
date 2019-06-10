import React from "react";
import { Link } from "react-router-dom";

import Header from "./components/header";
import Toggle from "./components/Toggle";

const Pattern = () => {
  return (
    <div className="App">
      <Header title="Compound Components" />
      <Toggle>
        <Toggle.On>Checkbox is selected</Toggle.On>
        <Toggle.Off>Checkbox is not selected</Toggle.Off>
        <Toggle.Checkbox />
      </Toggle>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Pattern;
