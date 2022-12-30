import { useState } from 'react'
import { nanoid } from 'nanoid';
import './App.css'
import NotesList from '../components/NoteList';


const App = () => {
  const [notes, setNotes] = useState ([
    {
    Id: nanoid(),
    text: "jotain tekstiä",
    date: "1/1/2001"
    },
    {
      Id: nanoid(),
      text: "jotain tekstiä",
      date: "29/12/2022"
    }
]);

const addNote = (text) => {
        const date = new Date();
        const newNote = {
              id: nanoid(),
              text: text,
              date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
};

const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
};

  return ( 
    <div className='kontti'>
      <NotesList
              notes = {notes}
              handleAddNote = {addNote}
              handleDeleteNote={deleteNote}
              />
    </div>
  );
    
};


export default App
