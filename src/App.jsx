import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App
