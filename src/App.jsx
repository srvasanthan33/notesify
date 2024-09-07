import { useState } from 'react'
import './App.css'

import NotesList from './components/NotesList'


function App() {
  
  const [notes,setNotes] = useState([{
    id:crypto.randomUUID(),content : "This is the first Note",
    date:"01/02/2004"
  },
  {
    id:crypto.randomUUID(),
    content : "This is the second Note",
    date:"01/02/2004"
  },
  {
    id:crypto.randomUUID(),
    content : "This is the third Note",
    date:"01/02/2004"
  },
  {
    id:crypto.randomUUID(),
    content : "This is the fourth Noste lorem ispusm kandhm sasti kavasam",
    date:"01/02/2004"
  }]);
  

  return (
    <>
      <div className="container">
        <NotesList notes={notes}/>  
      </div>
      
    </>
  )
}

export default App
