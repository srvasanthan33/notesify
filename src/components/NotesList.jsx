
import Note from "./Note"
import './Notes.css'
import AddNote from "./AddNote"
const NotesList = ({notes,setNotes}) =>{
    return(
        <div className="NotesList">
            {notes.map(note=>{
                return <Note key ={note.id} id={note.id} content={note.content} date={note.date}/>
            })}
            <AddNote setNotes={setNotes}/>
        </div>
            
        
    )
}

export default NotesList