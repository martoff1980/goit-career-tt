import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`display:grid; place-items:center; height:70vh; background: linear-gradient(135deg,#e0e7ff,#f0f9ff);`
const Card = styled.div`background:#fff; border:1px solid ${({theme})=>theme.colors.border}; border-radius:${({theme})=>theme.radius}; box-shadow:${({theme})=>theme.shadow}; padding:32px; text-align:center; max-width:720px;`
const CTA = styled.button`margin-top:16px; padding:12px 20px; font-weight:600; border-radius:12px; border:1px solid ${({theme})=>theme.colors.border}; background:${({theme})=>theme.colors.primary}; color:#fff;`

export default function Banner(){
  const nav = useNavigate()
  return (
    <Section>
      <Card>
        <h1>TravelTrucks</h1>
        <p>Оренда кемперів для незабутніх подорожей.</p>
        <CTA onClick={()=>nav('/catalog')}>View Now</CTA>
      </Card>
    </Section>
  )
}
