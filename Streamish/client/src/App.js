import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";

function App() {
  return (
    <>
      <h1>Streamish</h1>
      <h2>Video List</h2>
      <div className="App">
        <VideoList />
      </div>
    </>
  );
}

export default App;
