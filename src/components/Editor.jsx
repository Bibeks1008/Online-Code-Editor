import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "./Editor.css";

export default function Editor({ displayName, language, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button className="expand-collapse-btn">O/C</button>
      </div>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
