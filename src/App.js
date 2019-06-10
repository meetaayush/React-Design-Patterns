import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home/Home";
import Pattern1 from "./pattern1";
import Pattern2 from "./pattern2";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/pattern1" exact component={Pattern1} />
      <Route path="/pattern2" exact component={Pattern2} />
    </BrowserRouter>
  );
}

export default App;
