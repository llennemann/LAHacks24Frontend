import {configureStore} from '@reduxjs/toolkit';
import { getFoodReducer, getItineraryReducer, getPOIReducer, getPlacesReducer, getStaysReducer, getTransportReducer } from './reducers/homereducer';

const initialState={
    getPlaces:{medicines:localStorage.getItem('places')?JSON.parse(localStorage.getItem('places')):[]},
    getTransport:{medicines:localStorage.getItem('transport')?JSON.parse(localStorage.getItem('transport')):[]},
    getStays:{medicines:localStorage.getItem('stays')?JSON.parse(localStorage.getItem('stays')):[]},
    getFood:{medicines:localStorage.getItem('food')?JSON.parse(localStorage.getItem('food')):[]},
    getPOI:{medicines:localStorage.getItem('poi')?JSON.parse(localStorage.getItem('poi')):[]},
    getITN:{medicines:localStorage.getItem('itinerary')?JSON.parse(localStorage.getItem('itinerary')):[]}
}

export default configureStore({
    reducer:{
        getPlaces:getPlacesReducer,
        getTransport:getTransportReducer,
        getStays:getStaysReducer,
        getFood:getFoodReducer,
        getPOI:getPOIReducer,
        getITN:getItineraryReducer
    },
    preloadedState:initialState
});