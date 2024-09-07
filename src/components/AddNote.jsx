const AddNote =() =>
    <>
    <div className="note new">
        
        <textarea name="addNote" placeholder="add new note" cols="10" rows="8"></textarea>
        <div className="note-footer">
            <span className="character-remaining">150 remaining</span>
            <button className="save">Save</button>
        </div>
    </div>
    </>


export default AddNote