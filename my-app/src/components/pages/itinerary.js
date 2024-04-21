import React from 'react';
import {useSelector} from "react-redux"

function Itinerary () {
    const data=useSelector(state=>state.getITN)
    console.log(data);
    return(
        <div className="schedule-page">
            <h2>Itinerary</h2>
        </div>
    )
}
export default Itinerary;