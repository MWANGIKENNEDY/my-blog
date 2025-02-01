import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedItems = () => {
  return (
    <div className=" mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 lg:items-center">
      <Link href="/post/1">
        {/* image section */}
        <div className="relative h-[370px] xl:h-[370px] 2xl:h-[400px] rounded-2xl overflow-hidden">
          <Image
            fill
            src="https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className=" object-cover h-full w-full"
          />
        </div>

        {/* text section  */}

        <div className=" mt-3">
          <div className=" flex gap-2 items-center">
            <span className=" font-semibold">01.</span>
            <span>Web Design</span>
            <span className=" text-gray-500">2 days ago</span>
          </div>

          <h1 className=" font-bold text-3xl mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </h1>
        </div>
      </Link>

      <div className=" flex flex-col gap-5 mt-6 lg:mt-0 ">
        <Link href="/post/1" className=" flex gap-3 items-center">
          {/* image section  */}
          <div className="relative h-[150px] w-1/3 rounded-2xl overflow-hidden">
            <Image
              fill
              src="https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>

          <div className=" mt-3 w-2/3">
            <div className=" flex gap-2 items-center">
              <span className=" font-semibold">01.</span>
              <span>Web Design</span>
              <span className=" text-gray-500">2 days ago</span>
            </div>

            <h1 className=" font-bold text-2xl mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </h1>
          </div>
        </Link>

        <Link href="/post/1" className=" flex gap-3 items-center">
          {/* image section  */}
          <div className="relative h-[150px] w-1/3 rounded-2xl overflow-hidden">
            <Image
              fill
              src="https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>

          <div className=" mt-3 w-2/3">
            <div className=" flex gap-2 items-center">
              <span className=" font-semibold">01.</span>
              <span>Web Design</span>
              <span className=" text-gray-500">2 days ago</span>
            </div>

            <h1 className=" font-bold text-2xl mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </h1>
          </div>
        </Link>

        <Link href="/post/1" className=" flex gap-3 items-center">
          {/* image section  */}
          <div className="relative h-[150px] w-1/3 rounded-2xl overflow-hidden">
            <Image
              fill
              src="https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>

          <div className=" mt-3 w-2/3">
            <div className=" flex gap-2 items-center">
              <span className=" font-semibold">01.</span>
              <span>Web Design</span>
              <span className=" text-gray-500">2 days ago</span>
            </div>

            <h1 className=" font-bold text-2xl mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedItems;
