import React from "react";
import Image from "next/image";
import SinglePostActions from "@/components/singlePostActions";

import Comments from "@/components/comments";
import DynamicFilters from "@/components/dynamicFilters";
const SinglePostPage = () => {
  return (
    <div>
      <div className=" flex gap-4 items-center">
        {/* 
    image section  */}

        {/* text section  */}

        <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
          <h1 className=" font-bold  text-lg lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            rem?
          </h1>

          <div className=" flex text-xs gap-1  flex-wrap">
            <span className=" text-gray-500">Written by </span>
            <span className=" text-blue-500">John Doe</span>
            <span className=" text-gray-500">on</span>
            <span className=" text-blue-500">Web Design</span>

            <span className=" text-gray-500">2 days ago</span>
          </div>

          <p className=" text-sm text-gray-600  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate, et
            odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>

        <div className="relative  w-1/3  h-[300px] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
            fill
            alt=""
            className=" object-cover h-full w-full"
          />
        </div>
      </div>

      {/* content section */}

      <SinglePostActions type="singlePostPage" />

      <div className="   mt-10 text-gray-700 text-lg lg:flex gap-6 ">
        <div className=" w-full">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Facere adipisci autem rem, accusamus
            similique voluptatibus esse sit temporibus id magni pariatur
            asperiores cum placeat est itaque soluta excepturi cumque dolor.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Facere adipisci autem rem, accusamus
            similique voluptatibus esse sit temporibus id magni pariatur
            asperiores cum placeat est itaque soluta excepturi cumque dolor.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Facere adipisci autem rem, accusamus
            similique voluptatibus esse sit temporibus id magni pariatur
            asperiores cum placeat est itaque soluta excepturi cumque dolor.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Facere adipisci autem rem, accusamus
            similique voluptatibus esse sit temporibus id magni pariatur
            asperiores cum placeat est itaque soluta excepturi cumque dolor.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            adipisci autem rem, accusamus similique voluptatibus esse sit
            temporibus id magni pariatur asperiores cum placeat est itaque
            soluta excepturi cumque dolor.
          </p>
          <br />
          <br />
          <div className="relative  h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
              fill
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>

          <Comments />
        </div>
<DynamicFilters type="singlePostPage"/>

      </div>
    </div>
  );
};

export default SinglePostPage;
