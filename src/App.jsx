import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import { Routes,Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  )
}

export default App