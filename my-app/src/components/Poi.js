import React from 'react';
import Review from './Review';
import ReviewNoRating from './ReviewNoRating';

function Poi() {
    let content;
    let reviews;

    const my_data =  {
        "data" : [
        {
        "name": "Statue of Liberty",
        "description": "The Statue of Liberty is a copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.",
        "link": "https://www.nps.gov/stli/index.htm",
        "days_closed": "Open",
        "reviews": [
        "A great view of the city.",
        "A must-see for any visitor to New York City.",
        "The views from the crown are amazing."
        ]
        },
        {
        "name": "Central Park",
        "description": "Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan.",
        "link": "https://www.centralparknyc.org/",
        "days_closed": "Open",
        "reviews": [
        "A great place to relax and escape the hustle and bustle of the city.",
        "A must-visit for any visitor to New York City.",
        "Beautiful park with lots to see and do."
        ]
        }]}
        

        content = my_data["data"]

        return (
            <div id='rec-list'>
                {content.map((place, index) => (
                    <div key={index} id="rec">
                        {place.name} 
                        <br></br>
                        Hours: {place.hours}
                        <br></br>
                        <a href={place.link}>{place.link}</a>
                        <br></br>
                        Reviews: <ReviewNoRating data={place.reviews}/>
                    </div>
                ))}
            </div>
          );

}

export default Poi;

