import axios from "axios";
import { API_KEY } from "../config";

export const getMarsRoverImages = async ({rover = "curiosity", sol = "1000"}) => {
  const response = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}`
  );
  return response;
};