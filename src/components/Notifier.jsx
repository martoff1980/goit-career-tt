import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearNotify } from '../features/ui/uiSlice'
import { useEffect } from 'react'

const Box = styled.div`
  position: fixed; right: 20px; bottom: 20px;
  background: ${({theme})=>theme.colors.bg};
  border: 1px solid ${({theme})=>theme.colors.border};
  box-shadow: ${({theme})=>theme.shadow};
  border-radius: ${({theme})=>theme.radius};
  padding: 12px 16px; min-width: 260px;
`

export default function Notifier(){
  const notify = useSelector(s=>s.ui.notify)
  const dispatch = useDispatch()
  useEffect(()=>{ if(notify){ const t=setTimeout(()=>dispatch(clearNotify()), 3000); return ()=>clearTimeout(t);} },[notify,dispatch])
  if(!notify) return null
  return <Box role="status" aria-live="polite"><strong style={{textTransform:'capitalize'}}>{notify.type}</strong>: {notify.message}</Box>
}
