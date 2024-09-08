import { MdDeleteForever } from "react-icons/md"


const Note = ({id,content,date,deleteNote}) =>{
    const handleDeleteNote = (e)=>
    {
        deleteNote(id)
    }
    return (
        <div className="note">
            <span className="note-content">
                {content}
            </span>
            
            <div className="note-footer">
                
                <small className="note-date">{date}</small>
                <MdDeleteForever className="delete-icon" size="1.5em" onClick={handleDeleteNote}/>
            </div>
        </div>
    )
}

export default Note

