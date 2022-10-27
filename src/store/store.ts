


import { configureStore } from '@reduxjs/toolkit'


import rootReducer from 'src/store/rootReducer'



const store = configureStore({
    reducer: rootReducer
})


export default store
