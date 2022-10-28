

import { createSlice } from '@reduxjs/toolkit'


import type { PayloadAction } from '@reduxjs/toolkit'



interface PageState {
  value: number
  totalItems: number
  isLastPage: boolean
}


const initialState = { value: 1, totalItems: 0, isLastPage: true } as PageState


const pageSlice = createSlice({

    name: 'page',
    initialState,

    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.value = action.payload
        },
        setTotalItems(state, action: PayloadAction<number>) {
            state.totalItems = action.payload
        },
        setLastPageFlag(state, action: PayloadAction<boolean>) {
            state.isLastPage = action.payload
        }
    }
})



export const { setPage, setTotalItems, setLastPageFlag } = pageSlice.actions


export default pageSlice.reducer
