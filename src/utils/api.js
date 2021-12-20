import axios from 'axios'
import { API_KEY } from '../config'

export const getMarsRoverImages = async (rover = 'curiosity') => {
 const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${API_KEY}`)
 return response;
}