import Carousel from "./Carousel";
import Dropdown from "./Dropdown";

export default function Produit(props){
    const {id, title, pictures, description, host, rating, location, equipments, tags} = props.props;

    const labels = tags.map((tag, index) => (
        <li className="product-label" key={index}>{tag}</li>
    ));

    function addLineBreak(name){
        let nameTable = name.split("");
        for (let i = 0; i < nameTable.length; i++) {
            if (nameTable[i] === ' ') {
                nameTable[i] = '\n'; 
            }
        }
        return nameTable.join("");
    }

    function displayRating(rating){
        for(i=0; i<rating; i++){
            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#ff6060" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        }
    }

    return (<>
        <section className="product-section">
            <Carousel pictures={pictures} />
            <div className="main-produit-container">
                <div className="title-container">
                    <h1 className="product-title">{title}</h1>
                    <h2 className="location-info">{location}</h2>
                    <ul>
                        {labels}
                    </ul>
                </div>
                <div className="renter-container">
                    <div className="renter-info">
                    <h3 className="renter-name">{addLineBreak(host.name)}</h3>
                        <img className="renter-picture" src={host.picture} />
                    </div>
                    <div className="stars-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#ff6060" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#ff6060" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#ff6060" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#e3e3e3" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 576 512"><path fill="#e3e3e3" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                     
                    </div>
                </div>
            </div>
            <div className="dropdowns-container" id="dropdows-produits">
                <Dropdown name="Description" description={description} />
                <Dropdown name="Equipements" equipments={equipments} />
            </div>
        </section>
    </>)
}