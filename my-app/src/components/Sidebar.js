import React from "react";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Sidebar({data}) {
    const {loading,places}=useSelector(state=>state.getPlaces)    
    return (
        <div id="sidebar">
            <h3>Places: </h3>
            {loading===false && places!==undefined && places!==null ?
            places.map((place, index) => (  
                <div key={index} className="places">
                    <p><Link to={`/schedule/${place.destination}`}>{place.destination}</Link>  </p>
                    <p>Cost(Approx): ${place.estimated_cost}</p>
                </div>
            )):
            <p></p>
            }
        </div>
    );
}

export default Sidebar;
