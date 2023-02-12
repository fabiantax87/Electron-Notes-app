import { useState } from "react";
import "./App.scss";

function App() {
  const [title, setTitle] = useState("Note title");
  const [desc, setDesc] = useState("Note contents..");

  return (
    <div className="app">
      <div className="saved-notes-bar">
        <div className="notes">
          <div className="note-small">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="note-small">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="note-small">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="note-small">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="note-small">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="input-section">
        <input placeholder="Note title" onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Note description" onChange={(e) => setDesc(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
