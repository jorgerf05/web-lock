import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="flex flex-col rounded-xl bg-white h-fit w-fit p-4 shadow-md">
      <div className="text-cyan-500 font-medium text-2xl">{title}</div>
      <div className="text-gray-500 font-normal text-xl">{text}</div>
    </div>
  );
};
export default Card;
