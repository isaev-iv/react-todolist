import "./App.scss";
import React from "react";
import Item from "./components/Item.jsx";
import AddField from "./components/AddField";

function App() {
  return (
    <div className="app">
      <AddField />
      <Item />
    </div>
  );
}

export default App;
