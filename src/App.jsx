import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import Foods from './components/Foods';
import Beverages from './components/Beverages';
import Liquors from './components/Liquors';
import Breakfast from './components/Breakfast';
import Desserts from './components/Desserts';
import Promotions from './components/Promotions';
import Combos from './components/Combos';
import Information from './Components/Information';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

      </>
    </div>
  )
}
export default App
