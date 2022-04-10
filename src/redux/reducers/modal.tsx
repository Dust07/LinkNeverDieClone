import { createSlice } from '@reduxjs/toolkit'

interface IModalInterface {
  msg: string | null
  isShow: boolean
  warning: boolean
}

const initialState: IModalInterface = {
  msg: "Error occurred! Please try again.",
  isShow: false,
  warning: false
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    SHOW_MODAL_NORMAL: (state, action) => {
      state.isShow = true
      state.msg = action.payload
      state.warning = false
    },
    SHOW_MODAL_WARNING: (state, action) => {
      state.isShow = true
      state.msg = action.payload
      state.warning = true
    },
    HIDE_MODAL: (state) => {
      state.isShow = false
      state.msg = "Error occurred! Please try again."
    }
  }
});


