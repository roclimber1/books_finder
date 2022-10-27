

import { combineReducers } from '@reduxjs/toolkit'


import booksAPI from 'src/services/booksAPI'




const rootReducer = combineReducers({
    [booksAPI.reducerPath]: booksAPI.reducer
})


export default rootReducer
