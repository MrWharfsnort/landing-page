import React from "react";

import Navigation from "./Components/Navigation/Navigation";
import TestComponent from "./Components/testComponent/TestComponent";

import "./App.css";
import "./scss/main.scss";

const app = () => (
  <div className="App">
    <Navigation />
    <TestComponent />
  </div>
);

export default app;
