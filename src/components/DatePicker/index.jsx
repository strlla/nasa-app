import React, { useState } from "react";
import EarthDate from "./EarthDate";
import MarsDate from "./MarsDate";
import "./styles.scss";

const DatePicker = ({ fetchRovers }) => {
  const [earthDate, setEarthDate] = useState({ day: "", month: "", year: "" });
  const [marsDate, setMarsDate] = useState("");

  const searchByDate = (isEarthDate) => {
    if (isEarthDate) {
      fetchRovers({ earthDate });
    } else {
      fetchRovers({ sol: marsDate });
    }
  };

  const onEarthDateChange = (date) => {
    setEarthDate(date);
  };

  const onMarsDateChange = (e) => {
    const value = e.target.value;
    setMarsDate(value);
  };

  return (
    <div className="date-picker">
      <EarthDate
        date={earthDate}
        updateDate={onEarthDateChange}
        searchByDate={searchByDate}
      />
      <MarsDate
        date={marsDate}
        updateDate={onMarsDateChange}
        searchByDate={searchByDate}
      />
    </div>
  );
};

export default DatePicker;
