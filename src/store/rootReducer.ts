

import { combineReducers } from '@reduxjs/toolkit'


import booksAPI from 'src/services/booksAPI'

import searchReducer from 'src/store/searchSlice'
import pageSlice from 'src/store/pageSlice'




const rootReducer = combineReducers({
    [booksAPI.reducerPath]: booksAPI.reducer,
    search: searchReducer,
    page: pageSlice
})



export default rootReducer
