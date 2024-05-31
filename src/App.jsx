import React, { useState } from "react";
import "./App.css";

import Editor from "./components/Editor.jsx";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
      <iframe
          srcDoc=''
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      </>
  );
}

export default App;
