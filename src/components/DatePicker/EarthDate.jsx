import React, { useEffect, useState } from "react";

const EarthDate = ({ date, updateDate, searchByDate }) => {
  const onInputChange = (fieldId, e) => {
    const value = e.target.value;
    const _date = { ...date, [fieldId]: value };
    updateDate(_date);
  };

  return (
    <div className="earth-date">
      <label htmlFor="day">Day: </label>
      <input
        id="day"
        type="text"
        maxLength="2"
        value={date.day}
        onChange={(e) => onInputChange("day", e)}
      />
      <label htmlFor="month">Month: </label>
      <input
        id="month"
        type="text"
        maxLength="2"
        value={date.month}
        onChange={(e) => onInputChange("month", e)}
      />
      <label htmlFor="year">Year: </label>
      <input
        id="year"
        type="text"
        maxLength="4"
        value={date.year}
        onChange={(e) => onInputChange("year", e)}
      />
      <button onClick={() => searchByDate(true)}>Search by Earth date</button>
    </div>
  );
};

export default EarthDate;
