import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
