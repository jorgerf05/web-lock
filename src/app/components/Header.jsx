import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row bg-white p-5 space-x-5 min-w-full">
      <div className="text-black font-bold text-xl">Meshlock</div>
      <div className="w-1 min-h-full bg-black rounded-full"></div>
      <div className="text-black justify-end">Dashboard</div>
      <div className="text-black text-end">Registro de eventos</div>
    </header>
  );
};

export default Header;
