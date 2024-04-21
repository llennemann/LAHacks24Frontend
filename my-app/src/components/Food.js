import React,{useEffect, useState} from 'react';
import Review from './Review';
import {useSelector} from 'react-redux'
function Food() {
    let content;
    const {loading,food}=useSelector(state=>state.getFood);
    const [select,makeSelection]=useState([])
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
        useEffect(()=>{
            localStorage.setItem('food_select',JSON.stringify(select))
        },[select])

        return (
            loading===false && food!==undefined?
          (  <div id='rec-list'>
                {food.map((place, index) => (
                    <div key={index} className="rec" onClick={(event)=>{makeSelection([...select,place]);document.getElementsByClassName('rec')[index].style.backgroundColor="#B8F8FE";}}>
                        <p style={{'fontWeight': 'bold'}}>{place.name}</p>
                        <br></br>
                        Address: {place.address}
                        <br></br>
                        <p>Type of Food: {place.type_of_food}</p>
                        <br></br>
                        <Review data={place.reviews}/>
                    </div>
                ))}
            </div>):
            (
                <div>
                <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
                </div>
            // <div id='rec-list'>
            //     {content.map((place, index) => (
            //         <div key={index} className="rec">
            //             {place.place_name} 
            //             <br></br>
            //             Hours: {place.hours}
            //             <br></br>
            //             <a href={place.booking_link}>{place.booking_link}</a>
            //             <br></br>
            //             Reviews: <Review data={place.google_reviews}/>
            //         </div>
            //     ))}
            // </div>
            )
          );

}

export default Food;

