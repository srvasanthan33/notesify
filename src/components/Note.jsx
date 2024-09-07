import { MdDeleteForever } from "react-icons/md"


const Note = ({data}) =>{
    return (
        <div className="note">
            <span>{(data) ? data:'Metal gear solid is a tactical, espionage and action game'}</span>
            
            <div className="note-footer">
                
                <small className="note-date">01/02/2004</small>
                <MdDeleteForever className="delete-icon" size="1.5em"/>
            </div>
        </div>
    )
}

export default Note

