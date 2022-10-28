

import { createSlice } from '@reduxjs/toolkit'


import type { PayloadAction } from '@reduxjs/toolkit'



interface SearchState {
  value: string
  subject: string
}


const initialState = { value: '', subject: '' } as SearchState


const searchSlice = createSlice({

    name: 'search',
    initialState,

    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        clearSearch(state) {
            state.value = ''
        },
        setSubject(state, action: PayloadAction<string>) {
            state.subject = action.payload
        },
        clearSubject(state) {
            state.subject = ''
        }
    }
})



export const { setSearch, clearSearch, setSubject, clearSubject } = searchSlice.actions


export default searchSlice.reducer
