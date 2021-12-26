import React from "react";
import { useAxios } from "../../utils/useAxios";
import { getMarsRoverImages } from "../../utils/api";
import MarsImages from "./MarsImages";
import "./styles.scss";

const MarsRover = () => {
  const { response, loading, error } = useAxios(getMarsRoverImages, {'rover': 'curiosity'});

  if (loading) {
    return <></>;
  }

  if (error) {
    return (
      <section className="mars-rover">
        Something went wrong, please try again.
      </section>
    );
  }

  return (
    <section className="mars-rover">
      <div className="mars-rover-description">
        <h1>Learn about Mars!</h1>
        <button>See more</button>
      </div>
      <div className="mars-rover-slider">
        <MarsImages
          photos={response.photos
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 10)}
        />
      </div>
    </section>
  );
};

export default MarsRover;
