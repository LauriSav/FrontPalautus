import { useState } from "react";

const AddNote = ( {handleAddNote} ) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
       setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
        
        
    };

    return (
        <div className="note new">
            <textarea
                cols="8"
                rows="9"
                placeholder="Kirjoita jotain..."
                value={noteText}
                onChange={handleChange}>
                </textarea>
                <div className="note-footer">
                    <small>...</small>
                    <button className="save" onClick={handleSaveClick}>Tallenna</button>
                </div>
        </div>
    )
}

export default AddNote;