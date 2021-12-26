import React from "react";

const RoversImages = ({ images }) => {
  return (
    <div className="rovers-page-container">
      {images.map((image) => (
        <div key={images.id} className="rover-card">
          <img src={image.img_src} />
        </div>
      ))}
    </div>
  );
};

export default RoversImages;
