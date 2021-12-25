import React, { useState, useEffect } from "react";
import { getMarsRoverImages } from "../../utils/api";
import Pager from "./Pager";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles.scss";

const ROVERS = ["curiosity", "opportunity", "spirit"];

const Rovers = () => {
  const [roversLoading, setRoversLoading] = useState(true);
  const [roverData, setRoverData] = useState();

  const fetchRovers = async () => {
    const promises = ROVERS.map(async (rover) => {
      return await getMarsRoverImages({ rover });
    });
    const productsPromises = await Promise.all(promises);
    if (productsPromises) {
      const _roverData = [];
      productsPromises.map(({ data: { photos } }) => {
        _roverData.push(...photos);
      });
      setRoverData(_roverData);
      setRoversLoading(false);
    }
  };

  useEffect(() => {
    fetchRovers();
  }, []);

  return (
    <section className="rovers">
      <h2>See more of our rovers</h2>
      {!roversLoading ? (
        <div className="rovers-wrapper">
          {ROVERS.map((rover) => {
            return (
              <Pager
                roverType={rover}
                images={roverData.filter(
                  (r) => r.rover.name.toLowerCase() === rover.toLowerCase()
                )}
              />
            );
          })}
        </div>
      ) : (
        <div className="rovers-loading">
          <Loader type="Circles" color="#FFF" height={100} width={100} />
        </div>
      )}
    </section>
  );
};

export default Rovers;
