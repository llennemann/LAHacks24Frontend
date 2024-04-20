import { GET_PLACES_FAILED, GET_PLACES_REQUEST, GET_PLACES_SUCCESS } from "../constants/homeconstants";

export const getPlacesReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_PLACES_REQUEST:return {loading:true}
        case GET_PLACES_SUCCESS: return {loading:false,places:action.payload}
        case GET_PLACES_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}