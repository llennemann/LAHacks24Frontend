import React from "react";
import { Link } from 'react-router-dom';

function Sidebar({ data }) {
    return (
        <div id="list-places">
            <h3>Places: </h3>
            {data.map((place, index) => (  
                <div key={index} id="place">
                    <Link to={`/schedule/${place.name}`}>{place.name}</Link>  
                    <p>{place.budget}</p>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
