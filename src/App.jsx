import React from "react";
import { ResumeWithDownload, Resume } from "./Resume";

const App = () => {
  return (
    <div className="App">
      <h1>Resume</h1>
      <Resume />
      {/* download button */}
      <p>Download</p>
      <ResumeWithDownload />
    </div>
  );
};

export default App;
