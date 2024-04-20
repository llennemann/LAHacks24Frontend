import React from 'react';
import Review from './Review';

function Food() {
    let content;
    let reviews;

    const my_data =  {
                        "data" : [
            {
            "place_name": "Levain Bakery",
            "location": {
            "distance_from_times_square": "0.4 miles",
            "distance_from_central_park": "1 mile",
            "distance_from_31_street_broadway_hotel": "0.4 miles"},
            "google_reviews": [{
            "review_text": "Amazing cookies",
            "rating": 5 }, {"review_text": "Must-try in NYC",
            "rating": 5}],
            "booking_link": "https://www.levainbakery.com/",
            "hours": "8am-6pm"
            },
            {
            "place_name": "Katz's Delicatessen",
            "location": {
            "distance_from_times_square": "0.5 miles",
            "distance_from_central_park": "1.1 miles",
            "distance_from_31_street_broadway_hotel": "0.5 miles"
            },
            "google_reviews": [
            {
                "review_text": "Iconic NYC deli",
                "rating": 4
            },
            {
                "review_text": "Great pastrami",
                "rating": 4
            }
            ],
            "booking_link": "https://www.katzsdelicatessen.com/",
            "hours": "8am-10pm"
            }
            ]
            }

        content = my_data["data"]

        return (
            <div id='rec-list'>
                {content.map((place, index) => (
                    <div key={index} id="rec">
                        {place.place_name} 
                        <br></br>
                        Hours: {place.hours}
                        <br></br>
                        <a href={place.booking_link}>{place.booking_link}</a>
                        <br></br>
                        Reviews: <Review data={place.google_reviews}/>
                    </div>
                ))}
            </div>
          );

}

export default Food;

