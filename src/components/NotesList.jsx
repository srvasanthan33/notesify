
import Note from "./Note"
import './Notes.css'
import AddNote from "./AddNote"
const NotesList = ({notes,setNotes}) =>{
    const deleteNote = (noteId) => {
        setNotes((prev) => (prev.filter(note => note.id !== noteId)))
    }
    return(
        <div className="NotesList">
            {notes.map(note=>{
                return <Note key ={note.id} id={note.id} content={note.content} date={note.date} deleteNote={deleteNote}/>
            })}
            <AddNote setNotes={setNotes}/>
        </div>
            
        
    )
}

export default NotesList