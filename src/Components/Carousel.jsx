export default function Carousel (props) {
    const prevArrow = "<";
    const nextArrow = ">";
    
    <div className="carousel-container" aria-label="carousel d'images">
        <img className="carousel-image" src="#" />
        <div className="nav-arrow" id="prev-arrow">{prevArrow}</div>
        <div className="nav-arrow" id="next-arrow">{nextArrow}</div>
    </div>
}