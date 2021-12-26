import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import RoversImages from "./RoversImages";
import Cameras from "../Cameras";
import DatePicker from "../DatePicker";

const Pager = ({ roverType, images }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState([]);
  const [filteredImages, setFilteredImages] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (images.length <= 25) {
      setCount(0);
      setImagesPerPage(images);
    } else {
      setCount(Math.ceil(images.length / 25));
      setImagesPerPage(images.slice(25 * (page - 1), 25 * (page - 1) + 25));
    }
  }, [page]);

  useEffect(() => {
    if (filteredImages) {
      if (filteredImages.length > 0) {
        setNoResults(false);
        if (filteredImages.length > 25) {
          setCount(Math.ceil(filteredImages.length / 25));
          setImagesPerPage(
            filteredImages.slice(25 * (page - 1), 25 * (page - 1) + 25)
          );
        } else {
          setCount(0);
          setImagesPerPage(filteredImages);
        }
      } else {
        setNoResults(true);
      }
    }
  }, [filteredImages]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <div className="rovers-wrapper">
      <h3>{roverType}</h3>
      <Cameras
        rover={roverType}
        updateImages={setFilteredImages}
        images={images}
      />
      {count > 0 && (
        <Pagination count={count} page={page} onChange={handleChange} />
      )}
      {!noResults ? (
        images.length === 0 ? (
          <p>Sorry, no images found</p>
        ) : (
          <RoversImages images={imagesPerPage} />
        )
      ) : (
        <p className="no-results">
          Sorry, we don't have images with the selected camera.
        </p>
      )}
    </div>
  );
};

export default Pager;
