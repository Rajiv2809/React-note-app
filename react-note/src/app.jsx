import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1> Note App</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Tambahkan catatan baru..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Tambah Catatan</button>
      </div>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
