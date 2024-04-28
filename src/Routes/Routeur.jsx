import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import FicheProduit from './FicheProduit.jsx';
import PageNotFound from "./PageNotFound.jsx";
import logements from "../assets/logements.json";

export default function Routeur() {
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