import React from "react";

const Filters = () => {
  return (
    <div className=" flex flex-col lg:flex-row mt-12  bg-white justify-between items-center lg:mt-16  rounded-3xl p-4">
      <div className=" w-full  flex gap-4 flex-wrap justify-start  ">
        <button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm  w-max   ">
          All Posts
        </button>
        <button className="   text-gray-700 px-4 py-2 rounded-full text-sm   w-max  ">
          Web Design
        </button>
        <button className="  text-gray-700 px-4 py-2 rounded-full text-sm   w-max    ">
          Development
        </button>
        <button className="  text-gray-700 px-4 py-2 rounded-full  text-sm  w-max     ">
          Databases
        </button>
        <button className="  text-gray-700 px-4 py-2 rounded-full text-sm   w-max    ">
          Search Engines
        </button>
        <button className="  text-gray-700 px-4 py-2 rounded-full text-sm   w-max  ">
          Marketing
        </button>
      </div>

      <div className="w-full lg:w-[600px]  bg-red-400 rounded-full overflow-hidden ">
        <input
          className=" w-full border-none outline-none bg-gray-200 text-sm h-full p-2 "
          placeholder="Search a post..."
          type="text"
        />
      </div>
    </div>
  );
};

export default Filters;

{
  /* <button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm  w-max  lg:flex-1  ">
All Posts
</button>
<button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm   w-max  lg:flex-1  ">
Web Design
</button>
<button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm   w-max  lg:flex-1   ">
Development
</button>
<button className=" bg-blue-500 text-white px-4 py-2 rounded-full  text-sm  w-max  lg:flex-1   ">
Databases
</button>
<button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm   w-max  lg:flex-1 flex-shrink-0 ">
Search Engines
</button>
<button className=" bg-blue-500 text-white px-4 py-2 rounded-full text-sm   w-max  lg:flex-1  ">
Marketing
</button> */
}
