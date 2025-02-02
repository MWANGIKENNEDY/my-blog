import React from "react";
import { FaFacebook, FaInstagram, FaSave, FaTrash } from "react-icons/fa";

const DynamicFilters = ({ type }: { type: string }) => {
  return (
    <div className=" w-max hidden sticky top-20  bg-white h-max p-4 lg:flex flex-col gap-6 rounded-xl">
      {type === "singlePostPage" && (
        <div className=" flex flex-col gap-2">
          <h1 className=" text-sm font-bold">Author</h1>

          <div className=" flex items-center gap-3">
            <div className=" size-12 bg-red-400 rounded-full "></div>

            <span className=" text-sm">John Doe</span>
          </div>

          <span className=" text-gray-500 text-xs max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem
            quibusdam praesentium.
          </span>

          <div className=" flex items-center gap-2 mt-2">
            <FaFacebook />

            <FaInstagram />
          </div>
        </div>
      )}


{ type==="postsLists" && (
        <div className=" flex flex-col gap-2">
          <h1 className=" font-bold text-sm">Search a post</h1>
          <div className="w-full   rounded-full overflow-hidden ">
            <input
              className=" w-full border-none outline-none bg-gray-200 text-sm h-full p-2 "
              placeholder="Search a post..."
              type="text"
            />
          </div>
        </div>
      )}

{ type==="postsLists" && (
        <div className=" flex flex-col gap-2">
          <h1 className=" font-bold text-sm">Filters</h1>
          <div className="w-full space-y-3   ">
            <div className=" flex items-center gap-2  text-sm">
            <input type="checkbox" name="newest" id="newest" />
            <label htmlFor="newest">Newest</label>
            </div>
  
            <div className=" flex items-center gap-2  text-sm">
            <input type="checkbox" name="newest" id="newest" />
            <label htmlFor="newest">Most Popular</label>
            </div>
            <div className=" flex items-center gap-2  text-sm">
            <input type="checkbox" name="newest" id="newest" />
            <label htmlFor="newest">Trending</label>
            </div>
            <div className=" flex items-center gap-2  text-sm">
            <input type="checkbox" name="newest" id="newest" />
            <label htmlFor="newest">Oldest</label>
            </div>
           
          </div>
        </div>
      )}

      {type === "singlePostPage" && (
        <div className="flex flex-col gap-2">
          <h1 className=" font-bold text-sm">Actions</h1>

          <p className=" text-sm flex items-center gap-1 text-gray-500">
            {" "}
            <FaSave /> <span>Save this post</span>{" "}
          </p>
          <p className=" text-red-500 text-sm flex items-center gap-1">
            {" "}
            <FaTrash /> <span>Delete this post</span>{" "}
          </p>
        </div>
      )}

      <div className=" flex flex-col gap-2">
        <h1 className=" font-bold text-sm">Categories</h1>

        <p className=" text-sm underline text-gray-500">All</p>
        <p className=" text-sm underline text-gray-500">Web Design</p>
        <p className=" text-sm underline text-gray-500">Developement</p>
        <p className=" text-sm underline text-gray-500">Databases</p>
        <p className=" text-sm underline text-gray-500">Seacch Engines</p>
        <p className=" text-sm underline text-gray-500">Marketing</p>
      </div>

      {type === "singlePostPage" && (
        <div className=" flex flex-col gap-2">
          <h1 className=" font-bold text-sm">Search a post</h1>
          <div className="w-full   rounded-full overflow-hidden ">
            <input
              className=" w-full border-none outline-none bg-gray-200 text-sm h-full p-2 "
              placeholder="Search a post..."
              type="text"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicFilters;
