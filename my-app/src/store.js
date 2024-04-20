import {configureStore} from '@reduxjs/toolkit';
import { getPlacesReducer } from './reducers/homereducer';
const initialState={
    getPlaces:{medicines:localStorage.getItem('places')?JSON.parse(localStorage.getItem('places')):[]},
}

export default configureStore({
    reducer:{
        getPlaces:getPlacesReducer,
    },
    preloadedState:initialState
});