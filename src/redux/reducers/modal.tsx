import { createSlice } from '@reduxjs/toolkit'

interface IModalInterface {
  msg: string | null
  isShow: boolean
  normalModal: boolean
}

const initialState: IModalInterface = {
  msg: "",
  isShow: false,
  normalModal: true
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    SHOW_MODAL_NORMAL: (state, action) => {
      state.isShow = true
      state.msg = action.payload
      state.normalModal = true
    },
    SHOW_MODAL_WARNING: (state, action) => {
      state.isShow = true
      state.msg = action.payload
      state.normalModal = false
    },
    HIDE_MODAL: (state) => {
      state.isShow = false
      state.msg = ""
    }
  }
});


