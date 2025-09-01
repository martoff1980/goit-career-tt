import { createSlice } from '@reduxjs/toolkit'
const KEY = 'traveltrucks:favorites'
const load = ()=>{ try{ const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : [] }catch{return []} }
const save = (v)=>{ try{ localStorage.setItem(KEY, JSON.stringify(v)) }catch{} }

const favoritesSlice = createSlice({
  name:'favorites',
  initialState: load(),
  reducers:{
    toggleFavorite(state, { payload: id }){
      const i = state.indexOf(id)
      if(i===-1) state.push(id)
      else state.splice(i,1)
      save(state)
    }
  }
})
export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
