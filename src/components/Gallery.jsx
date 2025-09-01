export default function Gallery({ images = [] }){
  if(!images || images.length === 0) return null
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:8}}>
      {images.map((src,i)=> <img key={i} src={src} alt={`Photo ${i+1}`} style={{width:'100%', height:120, objectFit:'cover', borderRadius:12}} />)}
    </div>
  )
}
