import React from "react";

const MarsDate = ({ date, updateDate, searchByDate }) => {
  return (
    <div className="mars-date">
      <input type="text" maxLength="4" value={date} onChange={updateDate} />
      <button onClick={() => searchByDate(false)}>Search by Mars date</button>
    </div>
  );
};

export default MarsDate;
