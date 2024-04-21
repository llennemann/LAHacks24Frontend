import { GET_FOOD_FAILED, GET_FOOD_REQUEST, GET_FOOD_SUCCESS, GET_ITINERARY_FAILED, GET_ITINERARY_REQUEST, GET_ITINERARY_SUCCESS, GET_PLACES_FAILED, GET_PLACES_REQUEST, GET_PLACES_SUCCESS, GET_POI_FAILED, GET_POI_REQUEST, GET_POI_SUCCESS, GET_STAYS_FAILED, GET_STAYS_REQUEST, GET_STAYS_SUCCESS, GET_TRANSPORT_FAILED, GET_TRANSPORT_REQUEST, GET_TRANSPORT_SUCCESS } from "../constants/homeconstants";

export const getPlacesReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_PLACES_REQUEST:return {loading:true}
        case GET_PLACES_SUCCESS: return {loading:false,places:action.payload}
        case GET_PLACES_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}

export const getTransportReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_TRANSPORT_REQUEST:return {loading:true}
        case GET_TRANSPORT_SUCCESS: return {loading:false,transport:action.payload}
        case GET_TRANSPORT_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}

export const getStaysReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_STAYS_REQUEST:return {loading:true}
        case GET_STAYS_SUCCESS: return {loading:false,stays:action.payload}
        case GET_STAYS_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}

export const getFoodReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_FOOD_REQUEST:return {loading:true}
        case GET_FOOD_SUCCESS: return {loading:false,food:action.payload}
        case GET_FOOD_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}

export const getPOIReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_POI_REQUEST:return {loading:true}
        case GET_POI_SUCCESS: return {loading:false,poi:action.payload}
        case GET_POI_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}

export const getItineraryReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_ITINERARY_REQUEST:return {loading:true}
        case GET_ITINERARY_SUCCESS: return {loading:false,itinerary:action.payload}
        case GET_ITINERARY_FAILED: return {loading:false,error:action.payload}
        default: return state;
    }
}