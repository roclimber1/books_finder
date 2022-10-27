

import { createSlice } from '@reduxjs/toolkit'


import type { PayloadAction } from '@reduxjs/toolkit'



interface PageState {
  value: number
}


const initialState = { value: 1 } as PageState


const pageSlice = createSlice({

    name: 'page',
    initialState,

    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})



export const { setPage } = pageSlice.actions


export default pageSlice.reducer
