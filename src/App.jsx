import { useState } from 'react'
import './App.css'

import Form from './components/Form'

function App() {
  const [showForm, setShowForm] = useState(true)
  return (
    <>
      {showForm && <Form setShowForm={setShowForm}/>}
    </>
  )
}

export default App
