import React from "react";

const Comments = () => {
  return (
    <div className=" mt-12 lg:mt-16">
      <h1 className=" text-2xl font-light text-gray-500 underline ">
        Comments
      </h1>

      <form action="" className=" flex items-center w-full mt-5  gap-2">
        <textarea
          className=" outline-none border-none p-4 rounded-xl w-full text-sm"
          placeholder="Place a comment.."
          name=""
          id=""
          cols={30}
          rows={3}
        ></textarea>

        <button type="submit" className=" px-4 py-2 bg-blue-500 rounded text-white text-sm">
          Send
        </button>
      </form>

      <div className=" mt-6 lg:mt-8 space-y-7">
        <div className="  space-y-3 bg-white p-2 rounded-2xl ">
          <div className=" flex items-center gap-2">
            <div className="size-8 bg-blue-500 rounded-full"></div>
            <span className=" text-gray-800 font-semibold">John Doe</span>
            <span className=" text-xs text-gray-500">2 days ago</span>
          </div>

          <p className=" text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            aspernatur in fugit, facere et sed a iste doloremque nostrum soluta,
            tenetur suscipit eos libero aliquam earum assumenda ipsam minima
            blanditiis!
          </p>
        </div>

        <div className="  space-y-3 bg-white p-2 rounded-2xl ">
          <div className=" flex items-center gap-2">
            <div className="size-8 bg-blue-500 rounded-full"></div>
            <span className=" text-gray-800 font-semibold">John Doe</span>
            <span className=" text-xs text-gray-500">2 days ago</span>
          </div>

          <p className=" text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            aspernatur in fugit, facere et sed a iste doloremque nostrum soluta,
            tenetur suscipit eos libero aliquam earum assumenda ipsam minima
            blanditiis!
          </p>
        </div>

        <div className="  space-y-3 bg-white p-2 rounded-2xl ">
          <div className=" flex items-center gap-2">
            <div className="size-8 bg-blue-500 rounded-full"></div>
            <span className=" text-gray-800 font-semibold">John Doe</span>
            <span className=" text-xs text-gray-500">2 days ago</span>
          </div>

          <p className=" text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            aspernatur in fugit, facere et sed a iste doloremque nostrum soluta,
            tenetur suscipit eos libero aliquam earum assumenda ipsam minima
            blanditiis!
          </p>
        </div>

        <div className="  space-y-3 bg-white p-2 rounded-2xl ">
          <div className=" flex items-center gap-2">
            <div className="size-8 bg-blue-500 rounded-full"></div>
            <span className=" text-gray-800 font-semibold">John Doe</span>
            <span className=" text-xs text-gray-500">2 days ago</span>
          </div>

          <p className=" text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            aspernatur in fugit, facere et sed a iste doloremque nostrum soluta,
            tenetur suscipit eos libero aliquam earum assumenda ipsam minima
            blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
