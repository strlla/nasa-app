import React from "react";
import "./styles.scss";

const CAMERAS_BY_ROVER = {
  curiosity: ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam"],
  opportunity: ["fhaz", "rhaz", "navcam", "pancam", "minites"],
  spirit: ["fhaz", "rhaz", "navcam", "pancam", "minites"],
};

const Cameras = ({ rover, updateImages, images }) => {
  const filterByCamera = (e, camera) => {
    const filteredImages = images.filter(
      (image) => image.camera.name.toLowerCase() === camera
    );
    updateImages(camera != "" ? filteredImages : images);
  };

  return (
    <ul className="cameras">
      <li onClick={(e) => filterByCamera(e, "")}>All cameras</li>
      {CAMERAS_BY_ROVER[rover.toLowerCase()].map((camera) => (
        <li onClick={(e) => filterByCamera(e, camera)} key={camera}>
          {camera}
        </li>
      ))}
    </ul>
  );
};

export default Cameras;
