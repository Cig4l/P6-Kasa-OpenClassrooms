import './SCSS/App.scss';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from "./Routes/HomePage.jsx";
import About from "./Routes/About.jsx";
import FicheProduit from './Routes/FicheProduit.jsx';
import PageNotFound from "./Routes/PageNotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />    
          <Route path="/about" element={<About />} />    
          <Route path="/ficheProduit" element={<FicheProduit />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />     
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

