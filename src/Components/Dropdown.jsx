import React, { useState } from 'react';

export default function(props){
    const up = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="15"><path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>;
    const down = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  height="15"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>;
    
    const {name, description} = props;
    const [collapsed, setCollapse] = useState(true);
    // const [descriptionIsString, setDescriptionIsString] = useState(true);

    function toggleCollapse() {
        setCollapse(!collapsed);
    }

    function parseDescription(){
        if(Array.isArray(description)){
            return (
                <ul class="description-ul">
                  {description.map((string, index) => (
                    <li key={index} className="description" id="list-description">{string}</li>
                  ))}
                </ul>
              );
        }
        return <p className="description">{description}</p>;
    }

    return (
        <div className="dropdowns-container">
            <button className="dropdown-button" onClick={toggleCollapse}>
                <h4>{name}</h4>
                <p>{collapsed ? up : down}</p>
            </button>
            <div className={`collapse-text ${collapsed ? 'collapsed' : 'expanded'}`}>{!collapsed ? parseDescription() : <></>}</div>
            {/* <div className="collapse-text">{collapsed ? parseDescription() : <></>}</div> */}
        </div>
    )
}