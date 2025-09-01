export default function RatingStars({ value = 0 }){
  const rounded = Math.round(value)
  return <span aria-label={`Rated ${rounded} out of 5`}>{'★'.repeat(rounded)}{'☆'.repeat(5-rounded)}</span>
}
