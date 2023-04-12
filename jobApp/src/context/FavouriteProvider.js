
import React from 'react'
import { Provider } from "react-redux"
import { createStore } from "redux";
import { initialState } from './store';
import reducer from './reducer';

const FavouriteProvider = ({ children }) => {
    const store = createStore(reducer, initialState)

    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default FavouriteProvider
