import Axios from 'axios';
import { GET_PLACES_SUCCESS,GET_PLACES_FAILED,GET_PLACES_REQUEST, GET_TRANSPORT_REQUEST, GET_STAYS_REQUEST, GET_TRANSPORT_SUCCESS, GET_TRANSPORT_FAILED, GET_STAYS_SUCCESS, GET_STAYS_FAILED, GET_FOOD_FAILED, GET_FOOD_SUCCESS, GET_FOOD_REQUEST, GET_POI_SUCCESS, GET_POI_REQUEST, GET_POI_FAILED, GET_ITINERARY_REQUEST, GET_ITINERARY_SUCCESS, GET_ITINERARY_FAILED } from '../constants/homeconstants';

export const getPlacesAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_PLACES_REQUEST,payload:[]})
        var {data}=await await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places?source=${d.home}destination=${d.loc}budget=${d.budget}start_date=${d.startDate}return_date=${d.endDate}`)
        dispatch({type:GET_PLACES_SUCCESS,payload:data.data})
        localStorage.setItem('places',JSON.stringify(getState().getPlaces))
    } catch (error) {
        dispatch({type:GET_PLACES_FAILED})
    }
}

export const getTransportAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_TRANSPORT_REQUEST,payload:[]})
        var {data}= await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places/transportation?source=${d.home}&destination=${d.destination}&start_date=${d.startDate}&return_date=${d.endDate}`)
        dispatch({type:GET_TRANSPORT_SUCCESS,payload:data})
        localStorage.setItem('transport',JSON.stringify(getState().getTransport))
    } catch (error) {
        console.log(error)
        dispatch({type:GET_TRANSPORT_FAILED})
    }
}
export const getStaysAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_STAYS_REQUEST,payload:[]})
        var {data}= await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places/stays?current_location=${d.arrival_airport}&places=${d.places}&checkin_date=${d.startDate}&checkout_date=${d.endDate}`)
        dispatch({type:GET_STAYS_SUCCESS,payload:data})
        localStorage.setItem('stays',JSON.stringify(getState().getStays))
    } catch (error) {
        dispatch({type:GET_STAYS_FAILED})
    }
}
export const getFoodAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_FOOD_REQUEST,payload:[]})
        var {data}= await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places/food?stay=${d.stay}&destination=${d.loc}&places=${d.places}&checkin_date=${d.startDate}&checkout_date=${d.endDate}`)
        dispatch({type:GET_FOOD_SUCCESS,payload:data})
        localStorage.setItem('food',JSON.stringify(getState().getFood))
    } catch (error) {
        dispatch({type:GET_FOOD_FAILED})
    }
}
export const getPOIAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_POI_REQUEST,payload:[]})
        var {data}= await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places/poi?destination=${d.destination}&start_date=${d.startDate}&return_date=${d.endDate}`)
        dispatch({type:GET_POI_SUCCESS,payload:data})
        localStorage.setItem('pois',JSON.stringify(getState().getPOI))
    } catch (error) {
        dispatch({type:GET_POI_FAILED})
    }
}

export const getItineraryAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_ITINERARY_REQUEST,payload:[]})
        console.log("Action Fired")
        var {data}= await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/gemini/places/itinerary`,{params:d})
        // console.log(data)
        dispatch({type:GET_ITINERARY_SUCCESS,payload:data})
        localStorage.setItem('itinerary',JSON.stringify(getState().getITN))
    } catch (error) {
        dispatch({type:GET_ITINERARY_FAILED,payload:[]})
    }
}