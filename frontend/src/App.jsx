import React from "react";
import "./App.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
