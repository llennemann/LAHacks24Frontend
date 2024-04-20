import React from "react";
import ScrollableList from 'react-scrollable-list';

function Sidebar({ data }) {
    return (
        <div id="list-places">
            <h3>Places: </h3>
            <div id="try2-list">
                <ScrollableList
                listItems={data}
                heightOfItem={50}
                maxItemsToRender={2}
                scrollKey={'scrollableList'}
                />
            </div>
            
            {data.map(place => (
                <div id="place">
                    <a href="">{place["name"]}</a>
                    <p>{place["budget"]}</p>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;