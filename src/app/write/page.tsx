"use client";
import React from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const WritePostPage = () => {

  return (
    <div className=" space-y-6">
      <h1 className=" font-light  text-xl text-gray-600">Create a new post</h1>

      <form action="" className=" space-y-7 p-2">
        <button className="bg-white px-4 py-2 rounded text-sm shadow-md">
          Add a cover image
        </button>
        <h1 className=" text-3xl lg:text-5xl font-bold text-gray-400">
          My Awesome Story
        </h1>

        <div className=" flex items-center gap-5">
          <label htmlFor="cat" className=" text-sm text-gray-700">
            Choose a category:
          </label>
          <select
            name="cat"
            className=" w-[200px] px-3 py-3 rounded-lg  shadow-xl outline-none border-none"
            id=""
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name=""
          className=" block w-full rounded-lg shadow-xl p-4 outline-none border-none"
          placeholder="A Short Description"
          id=""
          cols={30}
          rows={3}
        ></textarea>
        <ReactQuill
          theme="snow"
        
          className=" shadow-lg"
          style={{ minHeight: "500px", background: "white ", border: "none" }}
        />
        <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePostPage;
