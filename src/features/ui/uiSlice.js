import { createSlice } from '@reduxjs/toolkit'
const uiSlice = createSlice({
  name:'ui',
  initialState:{ notify:null },
  reducers:{
    showNotify(state,{payload}){ state.notify = payload },
    clearNotify(state){ state.notify = null }
  }
})
export const { showNotify, clearNotify } = uiSlice.actions
export default uiSlice.reducer
