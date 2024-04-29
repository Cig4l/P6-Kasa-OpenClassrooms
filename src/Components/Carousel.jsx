import {useState} from "react";

export default function Carousel (props) {
    const prevArrow = <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 320 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>;
    const nextArrow = <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>;

    const pictures = props.pictures;
    const [currentIndex, setIndex] = useState(0);
    
    function prevImage(){
        if(currentIndex == 0){
            setIndex(pictures.length-1);
        }
        else{
            setIndex(currentIndex-1)
        }
    }

    function nextImage(){
        console.log(pictures);
        if(currentIndex == pictures.length-1){
            setIndex(0);
        }
        else{
            setIndex(currentIndex+1)
        }
    }

    return (<>
        <div className="carousel-container" aria-label="carousel d'images">
            <img className="carousel-img" src={pictures[currentIndex]} />
            <p className="carousel-index">{currentIndex+1}/{pictures.length}</p>
            <div className="nav-arrows-container">
                <button className="nav-arrow" id="prev-arrow" onClick={prevImage} >{prevArrow}</button>
                <button className="nav-arrow" id="next-arrow" onClick={nextImage}>{nextArrow}</button>
            </div>
        </div>
    </>)
}