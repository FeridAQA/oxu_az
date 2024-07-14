import { useState } from 'react'
import './App.css'
import JJ from './components/jj'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/mainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>} path='/'>

        </Route>
      </Routes>
    </>
  )
}

export default App
