import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/userInterfaces";

interface IInitialUsersState {
  message: string | null,
  isLoading: boolean,
  error: string | null,
  userData: UserInterface | UserInterface[] | null,
}

const initialState: IInitialUsersState = {
  message: null,
  isLoading: false,
  error: null,
  userData: null,
}

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    //Fetch data from API
    FETCH_USER: (state, action) => {
      state.isLoading = true
      state.message = action.payload
    },
    FETCH_USERS_SUCCESS: (state, action) => {
      state.userData = action.payload
      state.isLoading = false
      state.message = null
    },
    FETCH_USERS_FAILED: (state, action) => {
      state.error = action.payload
      state.isLoading = false
      state.message = null
    },

    //CREATE
    CREATE_NEW_USER_SUCCESS: (state, action) => {
      state.isLoading = false
      state.message = action.payload

    },
    CREATE_NEW_USER_FAILED: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    //SIGNIN - SIGNOUT
    USER_SIGN_OUT_SUCCESS: (state, action) => {
      state.isLoading = false
      state.message = action.payload

    },
    USER_SIGN_OUT_FAILED: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    USER_SIGN_IN_SUCCESS: (state, action) => {
      state.isLoading = false
      state.message = action.payload

    },
    USER_SIGN_IN_FAILED: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    //UPDATE
    USER_UPDATE_INIT: (state, action) => {
      state.isLoading = true
      state.message = action.payload
    },
    USER_UPDATE_SUCCESS: (state, action) => {
      state.isLoading = false
      state.message = action.payload
    },
    USER_UPDATE_FAILED: (state, action) => {
      state.isLoading = false
      state.message = action.payload
    }

  }
})