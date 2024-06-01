import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "./Editor.css";

export default function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
    console.log(value);
  }

  const css = open ? "" : "collapsed";
  return (
    <div className={`editor-container ${css}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          O/C
        </button>
      </div>
      <CodeMirror
        onBeforeChange={(editor, data, value) =>
          handleChange(editor, data, value)
        }
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
