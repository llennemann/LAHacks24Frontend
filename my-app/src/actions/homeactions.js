import Axios from 'axios';
import { GET_PLACES_SUCCESS,GET_PLACES_FAILED,GET_PLACES_REQUEST } from '../constants/homeconstants';

export const getPlacesAction=(d)=>async(dispatch,getState)=>{
    try {
        dispatch({type:GET_PLACES_REQUEST,payload:[]})
        var {data}=await await Axios.get(`http://localhost:8080/api/gemini/places?source=${d.home}destination=${d.loc}budget=${d.budget}start_date=${d.startDate}return_date=${d.endDate}`)
        dispatch({type:GET_PLACES_SUCCESS,payload:data.data})
        localStorage.setItem('places',JSON.stringify(getState().getPlaces))
    } catch (error) {
        dispatch({type:GET_PLACES_FAILED})
    }
}