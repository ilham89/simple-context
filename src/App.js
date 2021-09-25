import React from "react";
import "./App.css";
import Count from "./components/Count";
import CountContainer from "./components/CountContainer";

function App() {
  return (
    <div>
      <CountContainer>
        <Count />
      </CountContainer>
    </div>
  );
}

export default App;
