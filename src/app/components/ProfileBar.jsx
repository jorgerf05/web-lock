import React from "react";
import Image from "next/image";
import QuakerPhoto from "../../../public/quaker.jpg";
import AccessCard from "./AccessCard";

const ProfileBar = () => {
  return (
    <div className="flex flex-col h-screen bg-white w-1/4 items-center p-5 space-y-8">
      <div className="flex flex-row space-x-3 items-center">
        <Image
          src={QuakerPhoto}
          height={60}
          width={60}
          className="rounded-full"
          alt="Profile picture"
        ></Image>
        <div className="text-black text-center font-medium align-middle justify-center text-2xl">
          Jorge Rodriguez
        </div>
      </div>
      <div className="text-black text-xl text-center space-y-3">
        <div className="text-gray-500">Recent unlocks</div>
        <AccessCard
          location={"Laboratorio de Electronica"}
          time={"Monday at 14:03"}
        />
        <AccessCard
          location={"Laboratorio de Computo"}
          time={"Monday at 20:04"}
        />{" "}
        <AccessCard location={"Aula de Diseno"} time={"Today at 09:11"} />
      </div>
    </div>
  );
};

export default ProfileBar;
