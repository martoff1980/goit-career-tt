import axios from 'axios'
export const axiosClient = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  timeout: 15000,
})
