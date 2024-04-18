import { Link } from "react-router-dom"

export default function Gallery (props) {
    const backgroundImg = {backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg)'}
    return (<>
        <section className="gallery-section">
            <div className="gallery-item">
                {/* <a className="gallery-link" style={backgroundImg} href="#"></a> */}
                <Link to="/ficheProduit" className="gallery-link" style={backgroundImg}>A propos</Link>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <a className="gallery-link" style={backgroundImg} href="#"></a>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <a className="gallery-link" style={backgroundImg} href="#"></a>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <a className="gallery-link" style={backgroundImg} href="#"></a>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <a className="gallery-link" style={backgroundImg} href="#"></a>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
            <div className="gallery-item">
                <a className="gallery-link" style={backgroundImg} href="#"></a>
                <h2 className="gallery-item-name">Nom de la location</h2>
            </div>
        </section>
    </>)
}

