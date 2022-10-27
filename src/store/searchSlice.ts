

import { createSlice } from '@reduxjs/toolkit'


import type { PayloadAction } from '@reduxjs/toolkit'



interface SearchState {
  value: string
  previous: string
}


const initialState = { value: '', previous: '' } as SearchState


const searchSlice = createSlice({

    name: 'search',
    initialState,

    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        clear(state) {
            state.value = ''
        },
        setPrevious(state) {
            state.previous = state.value
        }
    }
})



export const { setSearch, clear, setPrevious } = searchSlice.actions


export default searchSlice.reducer
