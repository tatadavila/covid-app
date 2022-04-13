// @vendors
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// @components
import { Home } from "./components/pages/Home";

// @styles
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>COVID APP</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
