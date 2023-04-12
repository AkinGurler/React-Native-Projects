import React from 'react'

import Router from './Router'
import FavouriteProvider from './context/FavouriteProvider'

export default () => {
    return (
        <FavouriteProvider>
            <Router />
        </FavouriteProvider>
    )
}