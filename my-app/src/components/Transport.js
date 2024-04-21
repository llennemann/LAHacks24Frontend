import React, { useEffect, useState } from 'react';
// import Review from './Review';
import {useSelector} from 'react-redux';

function Transport() {
    // source,destination-city,start-end date so just get the use selector for places
    const {loading,transport}=useSelector(state=>state.getTransport);
    const [select,makeSelection]=useState([])
    console.log(transport)
    let content;
    let in_flight;
    let out_flight;
    useEffect(()=>{
        localStorage.setItem('flights',JSON.stringify(select));
    },[select])
    const my_data = {
    "data": [
        {
        "inbound_flight": [
            {
            "airline": "United Airlines",
            "flight_number": "1640",
            "departure_airport": "Los Angeles International Airport (LAX)",
            "departure_time": "10:30 AM",
            "arrival_airport": "John F. Kennedy International Airport (JFK)",
            "arrival_time": "5:30 PM",
            "duration": "5 hours",
            "price": "$250",
            "link": "https://www.united.com/en-us/book/flights/results?q= LAX JFK 2024-05-05 2024-05-10&v=1"
            },
            {
            "airline": "Delta Air Lines",
            "flight_number": "4567",
            "departure_airport": "Los Angeles International Airport (LAX)",
            "departure_time": "12:00 PM",
            "arrival_airport": "LaGuardia Airport (LGA)",
            "arrival_time": "6:00 PM",
            "duration": "4 hours",
            "price": "$275",
            "link": "https://www.delta.com/en-us/book/choose-flights/results?q= LAX LGA 2024-05-05 2024-05-10&v=1"
            }],
            
            "outbound_flight": [
                {
                "airline": "American Airlines",
                "flight_number": "2345",
                "departure_airport": "John F. Kennedy International Airport (JFK)",
                "departure_time": "08:00 AM",
                "arrival_airport": "Los Angeles International Airport (LAX)",
                "arrival_time": "11:00 AM",
                "duration": "4 hours",
                "price": "$220",
                "link": "https://www.aa.com/homePage.do?locale=en_US"
                },
                {
                "airline": "Southwest Airlines",
                "flight_number": "1234",
                "departure_airport": "LaGuardia Airport (LGA)",
                "departure_time": "10:00 AM",
                "arrival_airport": "Los Angeles International Airport (LAX)",
                "arrival_time": "1:00 PM",
                "duration": "4 hours",
                "price": "$199",
                "link": "https://www.southwest.com/air/booking/?"
                }
            ]
            }
        ]
        }

        content = my_data["data"]
        in_flight = my_data["data"][0]["inbound_flight"] // an array of dicts
        out_flight = my_data["data"][0]["outbound_flight"] // an array of dicts

        return (
            loading===false && transport!==undefined?
            ( 
                <div id="all-flights">
                <div id="flight-list">
                    <h3>Inbound:</h3>
                    <div id="inner-flight-boxes">
                        {transport['inbound_flight'].map((flight, index) => (
                            <div key={index} className="flight_inbound" onClick={(event)=>{makeSelection({...select,inbound:{...flight,local_id:index}});document.getElementsByClassName('flight_inbound')[index].style.backgroundColor="green";}}>
                                <p>{flight.flight_operator}  {flight.flight_id}</p>
                                <p>{flight.departure_airport_code} on {flight.depart_date} at {flight.departure_time}</p>
                                <p>{flight.arrival_airport_code} on {flight.arrival_date} at {flight.arrival_time}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <br/>
                <div id="flight-list">
                    <h3>Outbound:</h3>
                    <div id="inner-flight-boxes">
                        {transport['outbound_flight'].map((flight, index) => (
                            <div key={index} className="flight_outbound" onClick={(event)=>makeSelection({...select,outbound:{...flight,local_id:index}})}>
                            <p>{flight.flight_operator}  {flight.flight_id}</p>
                            <p>{flight.departure_airport_code} on {flight.depart_date} at {flight.departure_time}</p>
                            <p>{flight.arrival_airport_code} on {flight.arrival_date} at {flight.arrival_time}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )
            :(
                <div id="all-flights">
                <div id="flight-list">
                    <h3>Inbound:</h3>
                    <div id="inner-flight-boxes">
                        {in_flight.map((flight, index) => (
                            <div key={index} className="flight_inbound">
                                <p>{flight.airline}</p>
                                <p>{flight.departure_airport} to {flight.arrival_airport}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="flight-list">
                    <h3>Outbound:</h3>
                    <div id="inner-flight-boxes">
                        {out_flight.map((flight, index) => (
                            <div key={index} className="flight_outbound">
                                <p>{flight.airline}</p>
                                <p>{flight.departure_airport} to {flight.arrival_airport}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )
            // <div id='rec-list'>
            //     {content.map((place, index) => (
            //         <div key={index} id="rec">
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
          );

}

export default Transport;

