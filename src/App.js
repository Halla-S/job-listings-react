import React from "react";
import "./App.css";
import Data from "./data.json";
import JobAds from "./JobAds";

function App() {
  return (
    <div>
      <JobAds data={Data} />
    </div>
  );
}

export default App;
