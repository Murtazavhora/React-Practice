import React, { useState, useEffect } from "react";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    setNotes([...notes, { id: Date.now(), text: note }]);
    setNote("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>Notes App (LocalStorage)</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter note..."
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          Add
        </button>
      </form>

      <ul>
        {notes.map((n) => (
          <li key={n.id} style={{ marginTop: "10px" }}>
            {n.text}
            <button
              onClick={() => deleteNote(n.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;