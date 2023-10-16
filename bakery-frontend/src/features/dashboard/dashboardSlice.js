import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: '',
    endDate: '',
    orders: []
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers:{
        setStartDateReducer: (state, action) => {
            state.startDate = action.payload;
        },

        setEndDateReducer: (state, action) => {
            state.endDate = action.payload;
        },

        setOrdersReducer: (state, action) => {
            state.orders = action.payload;
        }
    }
})

export const {setStartDateReducer, setEndDateReducer, setOrdersReducer} = dashboardSlice.actions;

export default dashboardSlice.reducer;