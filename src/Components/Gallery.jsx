import { Link } from "react-router-dom"
import logements from "../assets/logements.json";
// style={{marginRight: spacing + 'em'}}

export default function Gallery (props) {
    const backgroundImg = {backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg)'}
    const galleryItems = logements.map((logement, index) => (
        <div className="gallery-item" key={index} id={`logement-${logement.id}`}>
            <div className="gallery-link" style={{backgroundImage: `url(${logement.cover})`}}></div>
            <h2 className="gallery-item-name">{logement.title}</h2>
            <Link to={`/${logement.id}`} className="gallery-gradient"></Link>
        </div>
    ));
    
    return (<>

        <section className="gallery-section">
            {galleryItems}
        </section>
    </>)
}

