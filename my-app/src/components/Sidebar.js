import React from "react";
// import ScrollableList from 'react-scrollable-list';

function Sidebar({ data }) {
    return (
        <div id="sidebar">
            <h3>Places: </h3>
           <div>
            {data.map(place => (
                <div class="places">
                    <a href="/">{place["name"]}</a>
                    <p>{place["budget"]}</p>
                </div>
            ))}
            </div> 
        </div>
    )
}

export default Sidebar;