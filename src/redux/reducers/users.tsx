import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    usersData: [],
    error: null
}

export const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        FETCH_USERS: (state, action) => {
            state.isLoading = true
        },
        FETCH_USERS_SUCCESS: (state, action) => {
            state.usersData = action.payload
            state.isLoading = false
        },
        FETCH_USERS_FAILED: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export default usersSlice.reducer;