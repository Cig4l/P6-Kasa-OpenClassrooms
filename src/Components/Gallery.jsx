import { Link } from "react-router-dom"
import logements from "../assets/logements.json";
// style={{marginRight: spacing + 'em'}}

export default function Gallery (props) {
    const backgroundImg = {backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg)'}
    const galleryItems = logements.map((logement, index) => (
        <div className="gallery-item" key={index} id={`logement-${logement.id}`}>
        <Link to="/ficheProduit" className="gallery-link" style={{backgroundImage: `url(${logement.cover})`}}></Link>
        <h2 className="gallery-item-name">{logement.title}</h2></div>
    ));
    
    return (<>

        <section className="gallery-section">
            {galleryItems}
            {/* <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}></Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div> */}
        </section>
    </>)
}

