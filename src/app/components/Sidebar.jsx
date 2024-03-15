import React from "react";
import HouseIcon from "../../../public/house.svg";
import BookIcon from "../../../public/book-solid.svg";
const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-white items-center p-5 w-1/5 space-y-5 rounded-r-2xl">
      <div className="text-cyan-500 text-3xl font-medium mb-8 mt-8">
        meshlock
      </div>

      <div className={styles.button}>
        <div className={styles.icon}>
          <HouseIcon />
        </div>
        Dashboard
      </div>
      <div className={styles.button}>
        <div className={styles.icon}>
          <BookIcon />
        </div>
        Access History
      </div>
    </aside>
  );
};

export default Sidebar;

const styles = {
  button:
    "hover:bg-slate-100 hover:text-cyan-500 text-gray-500 text-xl flex flex-row w-full h-11 items-center p-2 rounded-md transition",
  icon: "flex h-4 w-4 items-center align-middle mr-5 ",
};
