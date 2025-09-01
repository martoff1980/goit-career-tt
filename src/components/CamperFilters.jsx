import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setForm, toggleFeature } from '../features/filters/filtersSlice'
import { resetList, loadCampers } from '../features/campers/campersSlice'

const Panel = styled.div`position:sticky; top:12px; background:#fff; border:1px solid ${({theme})=>theme.colors.border}; border-radius:${({theme})=>theme.radius}; box-shadow:${({theme})=>theme.shadow}; padding:16px;`
const Row = styled.div`display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;`
const featuresCatalog = ['AC','kitchen','bathroom','TV','radio','refrigerator','microwave','gas','water']

export default function CamperFilters(){
  const filters = useSelector(s=>s.filters)
  const dispatch = useDispatch()
  const apply = ()=>{
    dispatch(resetList())
    dispatch(loadCampers())
  }
  
  return (
    <Panel style={{width: '200px'}}>
      <h4>Filters</h4>
      <Row>
        <input style={{height: '30px', border:'1px solid #75ed75',borderRadius: 10}} placeholder="Location" value={filters.location} onChange={(e)=>dispatch(setLocation(e.target.value))} />
        <select style={{width: '100%', height: '30px', border:'1px solid #75ed75',borderRadius: 10,}} value={filters.form} onChange={(e)=>dispatch(setForm(e.target.value))}>
          <option value="">Any form</option>
          <option value="alcove">Alcove</option>
          <option value="integrated">Integrated</option>
          <option value="panelTruck">Panel Truck</option>
        </select>
      </Row>
      <Row >
        {featuresCatalog.map(f=>(
          <label key={f}  style={{width: '100%', border:'1px solid #75ed75', borderRadius:10, padding:'4px 8px', backgroundColor: '#e0ffe0', cursor:'pointer'}}>
            <input type="checkbox" checked={filters.features.includes(f)}  onChange={()=>dispatch(toggleFeature(f))} style={{marginRight:6}} /> {f}
          </label>
        ))}
      </Row>
      <button style={{width:'100%', height:'30px', backgroundColor: '#75ed75',borderRadius:10}} onClick={apply}>Apply</button>
    </Panel>
  )
}
