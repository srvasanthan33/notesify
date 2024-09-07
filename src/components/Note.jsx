import { MdDeleteForever } from "react-icons/md"


const Note = ({id,content,date}) =>{
    return (
        <div className="note">
            <span className="note-content">
                {content}
            </span>
            
            <div className="note-footer">
                
                <small className="note-date">{date}</small>
                <MdDeleteForever className="delete-icon" size="1.5em"/>
            </div>
        </div>
    )
}

export default Note

