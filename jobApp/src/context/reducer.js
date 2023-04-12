import { initialState } from "./store";
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 
export const  initialState={
    favouriteJobs:[],
}

 */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVOURITE":
            AsyncStorage.setItem(action.payload.id, JSON.stringify(action.payload))
            return {
                ...state,
                favouriteJobs: [...state.favouriteJobs, action.payload]
            }
        case "REMOVE_FAVOURITE":
            AsyncStorage.removeItem(action.payload)
            return {
                ...state,
                favouriteJobs: state.favouriteJobs.filter(job => job.id !== action.payload)
            }


        default:
            console.log("default calisti")
            return state;
    }


}

export default reducer;