import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

import Pet from "./Pet";

function App() {
  console.log("hello");
  return (
    <div>
      <h1 className="adopt-me">Adopt me</h1>
      <SearchParams />;
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
