import React,{useState,useEffect} from 'react';
import ReviewNoRating from './ReviewNoRating';
import {useSelector} from 'react-redux';

function Poi() {
    let content;
    const {loading,poi}=useSelector(state=>state.getPOI)
    const [select,makeSelection]=useState([])
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
        useEffect(()=>{
            localStorage.setItem('poi_selected',JSON.stringify(select));
        },[select])
        return (
            loading===false && poi!==undefined?
            (<div id='rec-list'>
                {poi.map((place, index) => (
                    <div key={index} className="rec" onClick={(event)=>{makeSelection([...select,place]);document.getElementsByClassName('rec')[index].style.backgroundColor="#B8F8FE";}}>
                        {place.name} 
                        <br></br>
                        <p>Address {place.address}</p>
                        <br></br>
                        Hours: {place.hours}
                        <br></br>
                        Reviews <ReviewNoRating data={place.reviews}/>
                    </div>
                ))}
            </div>):<div>
                <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
                </div>
            // <div id='rec-list'>
            //     {content.map((place, index) => (
            //         <div key={index} className="rec">
            //             {place.name} 
            //             <br></br>
            //             Hours: {place.hours}
            //             <br></br>
            //             <a href={place.link}>{place.link}</a>
            //             <br></br>
            //             Reviews <ReviewNoRating data={place.reviews}/>
            //         </div>
            //     ))}
            // </div>
          );

}

export default Poi;

