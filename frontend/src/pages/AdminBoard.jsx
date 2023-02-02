import React from "react";

function AdminBoard() {
  return (
    <div className="flex justify-center py-4">
      <div className="hover:scale-105 w-fit flex box-border border-spacing-10 flex-col items-center justify-center h-[16rem] md:h-[15.2rem] border border-yellow-500 shadow-md bg-gray-800 rounded-lg lg:hover:scale-105 lg:w-fit lg:flex lg:box-border lg:border-spacing-10 lg:flex-col lg:items-center lg:justify-center lg:h-[22rem] lg:border lg:border-yellow-500 lg:shadow-md lg:bg-gray-800 lg:rounded-lg">
        <ul className="flex flex-col justify-between lg:flex lg:flex-col lg:justify-between">
          <li className="h-[16rem] md:h-[15rem] lg:h-[21.7rem]">
            <img
              className="w-50 rounded-lg  md:w-40 lg:w-60 lg:rounded-lg"
              alt="affiche "
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminBoard;
