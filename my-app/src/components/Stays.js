import React, { useState,useEffect } from 'react';
import Review from './Review';
import ReviewNoRating from './ReviewNoRating';
import {useSelector} from 'react-redux';

function Stays() {
    let content;
    let reviews;
    const {loading,stays}=useSelector(state=>state.getStays)
    console.log(stays)
    const [stay,setStay]=useState({})
    const my_data =  {
        "data": [
         {
          "name": "Crowne Plaza Times Square Manhattan",
          "address": "1605 Broadway, New York, NY 10019",
          "distance from Times Square": "0.1 miles",
          "distance from Central Park": "1.7 miles",
          "distance from JFK airport": "13.7 miles",
          "top 3 google reviews": [
           "Great location, friendly staff",
           "Clean and comfortable rooms",
           "Close to many restaurants and shops"
          ],
          "booking link": "https://www.ihg.com/crowneplaza/hotels/us/en/new-york/nycbr/hoteldetail"
         },
         {
          "name": "The Ritz-Carlton New York, Central Park",
          "address": "50 Central Park South, New York, NY 10019",
          "distance from Times Square": "1.2 miles",
          "distance from Central Park": "0.1 miles",
          "distance from JFK airport": "15.4 miles",
          "top 3 google reviews": [
           "Exceptional service, beautiful rooms",
           "Amazing views of Central Park",
           "Perfect location for exploring Manhattan"
          ],
          "booking link": "https://www.ritzcarlton.com/en/hotels/new-york/central-park"
         }]}
       
        content = my_data["data"]

        return (
            <div id='rec-list'>
                {content.map((place, index) => (
                    <div key={index} id="rec">
                        {place.name} 
                        <br></br>
                        {place.address}
                        <br></br>
                        <a href={place["booking link"]}>{place["booking link"]}</a>
                        <br></br>
                        Reviews: <ReviewNoRating data={place["top 3 google reviews"]}/>
                    </div>
                ))}
            </div>
          );

}

export default Stays;

