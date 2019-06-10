import React from "react";
import Header from "./components/header";
import Toggle from "./components/Toggle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Compound Components" />
      <Toggle>
        <Toggle.On>Checkbox is selected</Toggle.On>
        <Toggle.Off>Checkbox is not selected</Toggle.Off>
        <Toggle.Checkbox />
      </Toggle>
    </div>
  );
}

export default App;
