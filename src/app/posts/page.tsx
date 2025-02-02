import React from "react";
import Image from "next/image";
import Link from "next/link";
import DynamicFilters from "@/components/dynamicFilters";
import SinglePostActions from "@/components/singlePostActions";

const PostsListPage = () => {
  return (
    <div>
      <h1 className=" text-3xl font-light text-gray-600">Development Blog.</h1>
      <SinglePostActions type="postsLists" />

      <div className=" mt-12 lg:mt-16 flex">
        <div className=" space-y-10">
          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>

          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>

          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>

          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>
          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>
          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>

          <Link href="/post/1" className=" flex gap-8 items-center">
            {/* 
    image section  */}

            <div className="relative  w-1/3  h-[280px]  md:h-[190px] lg:h-[210px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                fill
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            {/* text section  */}

            <div className=" flex flex-col gap-3 lg:gap-5 w-2/3">
              <h1 className=" font-bold  text-lg lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, rem?
              </h1>

              <div className=" flex text-xs gap-1  flex-wrap">
                <span className=" text-gray-500">Written by </span>
                <span className=" text-blue-500">John Doe</span>
                <span className=" text-gray-500">on</span>
                <span className=" text-blue-500">Web Design</span>

                <span className=" text-gray-500">2 days ago</span>
              </div>

              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repellendus nemo impedit sit neque a, numquam ipsam. Cupiditate,
                et odit. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>

              <span className=" text-blue-500 underline text-xs">
                Read More
              </span>
            </div>
          </Link>
        </div>

        <div>

            <DynamicFilters type="postsLists"/>
        </div>
      </div>
    </div>
  );
};

export default PostsListPage;
