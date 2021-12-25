import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import RoversImages from "./RoversImages";
import Cameras from "../Cameras";

const Pager = ({ roverType, images }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState([]);

  useEffect(() => {
    if (images.length <= 25) {
      setCount(0);
      setItemsPerPage(images);
    } else {
      setCount(Math.ceil(images.length / 25));
      setItemsPerPage(images.slice(25 * (page - 1), 25 * (page - 1) + 25));
    }
  }, [page]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      <h3>{roverType}</h3>
      <Cameras rover={roverType} />
      {count > 0 && (
        <Pagination count={count} page={page} onChange={handleChange} />
      )}
      <RoversImages images={itemsPerPage} />
    </>
  );
};

export default Pager;
