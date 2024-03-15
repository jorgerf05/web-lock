import React from "react";

const AccessCard = ({ location, time }) => {
  return (
    <div className="flex flex-col bg-slate-100 p-3 rounded-lg text-left text-cyan-500 w-80">
      {location}
      <div className="text-gray-500">{time}</div>
    </div>
  );
};

export default AccessCard;
