import React from "react";
import { useAxios } from "../../utils/useAxios";
import { getMarsRover } from "../../utils/api";
import RoverImages from "./RoverImages";
import './styles.scss'

const MarsRover = () => {
  const { response, loading, error } = useAxios(getMarsRover);
  console.log(response);
  
  if (loading) {
    return <></>;
  }

  if (error) {
    return <section className='mars-rover'>
      Something went wrong, please try again.
    </section>
  }
  
  return (
    <section className='mars-rover'>
        <div className='mars-rover-description'>
            <h1>Mars Rover</h1>
            <button>See more</button>
        </div>
         <div className='mars-rover-slider'>
            <RoverImages photos={response.photos.sort((a, b) => 0.5 - Math.random()).slice(0, 10)} />
        </div>
    </section>
  );
};

export default MarsRover;
