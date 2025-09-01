import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCamperById } from '../../api/campersApi'

export const loadCamperById = createAsyncThunk('camperDetails/loadById', async (id)=> await fetchCamperById(id))

const camperDetailsSlice = createSlice({
  name:'camperDetails',
  initialState:{ data:null, status:'idle', error:null },
  reducers:{ clearCamper(state){ state.data = null; state.status='idle'; state.error=null } },
  extraReducers: (b)=>{
    b.addCase(loadCamperById.pending, (s)=>{ s.status='loading'; s.error=null })
    b.addCase(loadCamperById.fulfilled, (s,{payload})=>{ s.status='succeeded'; s.data = payload })
    b.addCase(loadCamperById.rejected, (s,{error})=>{ s.status='failed'; s.error = error?.message })
  }
})
export const { clearCamper } = camperDetailsSlice.actions
export default camperDetailsSlice.reducer
