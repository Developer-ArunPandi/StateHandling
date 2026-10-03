import { useState } from 'react'
import './App.css'
import FormPage from './FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <FormPage/>
    </>
  )
}

export default App
