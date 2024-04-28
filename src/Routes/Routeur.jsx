import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import FicheProduit from './FicheProduit.jsx';
import PageNotFound from "./PageNotFound.jsx";
import logements from "../assets/logements.json";

export default function Routeur() {
  const logementsLink = logements.map((logement, index) => (
    <Route path={`/${logement.id}`} key={index} element={<FicheProduit id={logement.id} title={logement.title} cover={logement.cover} description={logement.description} pictures={logement.pictures} host={logement.host} rating={logement.rating} location={logement.location} equipments={logement.equipments} tags={logement.tags} />} />
  ));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {logementsLink}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default function Routeur() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>
//           <Route path="/" element={<HomePage />} />    
//           <Route path="/about" element={<About />} />    
//           <Route path="/ficheProduit" element={<FicheProduit />} />
//           <Route path="/pageNotFound" element={<PageNotFound />} />     
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }