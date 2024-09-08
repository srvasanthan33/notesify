import { useState } from "react"

const AddNote =({setNotes}) =>
    {   
        const [noteContent,setNoteContent] = useState("")
        const [contentLength,setContentLength] = useState(noteContent.length)
        const [colorCharacter, setColorCharacter] = useState("grey")
        const handleContentChange = (target) =>{
            setNoteContent(target.target.value)
            setContentLength(noteContent.length)
            if (contentLength > 150)
            {
                setColorCharacter("red")
            }
        }

        const handleSaveNote = (e) =>{
            if (contentLength > 150)
            {
                alert("text length greater than 150")
                return

            }
            if(noteContent)
            {
                

            const newdate = new Date
            
            const newNote = {
                id:crypto.randomUUID(),
                content:noteContent,
                date:newdate.toISOString().slice(0,10)
            }
            setNotes((prevNotes) => [...prevNotes,newNote])
            setNoteContent("")
            setContentLength(0)
            }

        }
        return (
            <>
                <div className="note new">
                    
                    <textarea className="note-textarea" name="addNote" placeholder="add new note" cols="10" rows="8" onChange={handleContentChange} value={noteContent}></textarea>
                    <div className="note-footer">
                        {/* <span className="character-remaining" style={{color:colorCharacter}}>{150 - contentLength + "  remaining"} </span> */}
                        
                            {contentLength < 150 ? (<span className="character-remaining">{150 - contentLength + "  remaining"}</span>):(<span className="character-remaining" style={{color:"red"}}>{150 - contentLength + "  remaining"}</span>)}
                        
                        <button className="save" onClick={handleSaveNote}>Save</button>
                    </div>
                </div>
            </>
        )
    }


export default AddNote