import { axiosClient } from './axiosClient'

export const fetchCampers = async ({ location, form, features = [], page = 1, limit = 8 } = {})=>{
  const params = new URLSearchParams()
  if(location) params.set('location', location)
  if(form) params.set('form', form)
  features.forEach(f=>params.append('features', f))
  params.set('page', page)
  params.set('limit', limit)
  const { data } = await axiosClient.get('/campers?' + params.toString())
  return data
}

export const fetchCamperById = async (id)=>{
  const { data } = await axiosClient.get(`/campers/${id}`)
  return data
}

export async function getCampers() {
  const res = await axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
  console.log(res.data);
}
