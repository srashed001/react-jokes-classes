import React from "react";
import JokeList from "./JokeList";
import JokeListClassComponent from "./JokeListClassComponent";

function App() {
  return (
    <div className="App">
      {/* <JokeList /> */}
      <JokeListClassComponent numJokesToGet = {10} />
    </div>
  );
}

export default App;
