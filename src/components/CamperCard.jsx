import styled from 'styled-components'
import { formatPrice } from '../utils/formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../features/favorites/favoritesSlice'
import { Link } from 'react-router-dom'

const Wrap = styled.article`display:grid; grid-template-columns:220px 1fr; gap:16px; background:#fff; border:1px solid ${({theme})=>theme.colors.border}; border-radius:${({theme})=>theme.radius}; box-shadow:${({theme})=>theme.shadow}; padding:16px;`
const Thumb = styled.img`width:100%; height:160px; object-fit:cover; border-radius:12px;`
const Btn = styled.button`padding:8px 12px; border-radius:10px; border:1px solid #e5e7eb; background:#fff;`

export default function CamperCard({ camper }){
  const favorites = useSelector(s=>s.favorites)
  const dispatch = useDispatch()
  const isFav = favorites.includes(camper.id)
  console.log("camper.id:",camper)

  return (
    <Wrap>
      <Thumb src={(camper.gallery && camper.gallery[0]) || camper.image || 'https://via.placeholder.com/400x300'} alt={camper.name} />
      <div>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3 style={{margin:0}}>{camper.name}</h3>
          <strong>{formatPrice(camper.price)}</strong>
        </header>
        <p style={{color:'#6b7280'}}>{camper.location}</p>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', margin:'8px 0'}}>
          {['transmission','engine','AC','bathroom','kitchen','TV','radio','refrigerator','microwave','gas','water'].filter(k=>camper[k]).map(k=> <span key={k} style={{border:'1px solid #e5e7eb', padding:'4px 8px', borderRadius:10, fontSize:12}}>{k}</span>)}
        </div>
        <div style={{display:'flex', gap:8}}>
          <Btn onClick={()=>dispatch(toggleFavorite(camper.id))}>{isFav ? '★ In favorites' : '☆ Add to favorites'}</Btn>
          <Link to={`/catalog/${camper.id}`} target="_blank" rel="noopener"><Btn>Show more</Btn></Link>
        </div>
      </div>
    </Wrap>
  )
}
