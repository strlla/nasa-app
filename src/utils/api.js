import axios from "axios";
import { API_KEY } from "../config";

export const getMarsRoverImages = async ({
  rover = "curiosity",
  sol = "1000",
  earthDate = "",
}) => {
  const response = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos${
      !earthDate ? `?sol=${sol}` : ""
    }?earth_date=${earthDate.year}-${earthDate.month}-${
      earthDate.day
    }&api_key=${API_KEY}`
  );
  return response;
};
