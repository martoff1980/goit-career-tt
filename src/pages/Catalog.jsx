import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CamperCard from '../components/CamperCard'
import CamperFilters from '../components/CamperFilters'
import Loader from '../components/Loader'
import styled from 'styled-components'
import { loadCampers, nextPage } from '../features/campers/campersSlice'

const Grid = styled.div`display:grid; grid-template-columns:300px 1fr; gap:16px; align-items:start; padding:24px; max-width:1200px; margin:0 auto;`
const List = styled.div`display:grid; gap:12px;`

export default function Catalog(){
  const dispatch = useDispatch()
  const { items, status, hasMore } = useSelector(s=>s.campers)
  useEffect(()=>{ if(status === 'idle') dispatch(loadCampers()) }, [status, dispatch])
  const loadMore = ()=>{ dispatch(nextPage()); dispatch(loadCampers()) }

  return (
    <Grid>
      <CamperFilters />
      <div>
        <h1>{items.length}</h1>
        {status === 'loading' && items.length === 0 ? <Loader /> : (
          <>
            <List>{items.map(c=> <CamperCard key={c.id} camper={c} />)}</List>
            {status === 'failed' && <p style={{color:'crimson'}}>Failed to load campers.</p>}
            {hasMore && <div style={{marginTop:12}}><button onClick={loadMore}>Load More</button></div>}
          </>
        )}
      </div>
    </Grid>
  )
}
