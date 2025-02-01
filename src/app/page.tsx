import FeaturedItems from "@/components/featuredItems";
import Filters from "@/components/filters";
import RecentPosts from "@/components/recentPosts";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* breadcrumbs  */}

      <div className=" flex gap-4">
        <Link href="/">Home</Link>
        <span>•</span>
        <span className=" text-blue-500">Blogs and Articles</span>
      </div>

      {/* introduction */}

      <div className=" mt-8 flex justify-between items-center ">
        <div className=" w-full lg:max-w-7xl ">
          <h1 className=" text-4xl font-bold lg:text-7xl max-w-6xl  text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h1>

          <p className=" mt-5 text-lg lg:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            eveniet.
          </p>
        </div>

        <Link className=" relative  hidden lg:block" href="/write">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className=" text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
              fill="none"
            />

            <text fill="black">
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
            </text>

            <text fill="black">
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>

          <button className=" absolute top-0 left-0 right-0 bottom-0 h-20 w-20 m-auto bg-blue-800 rounded-full flex items-center justify-between">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="50"
                x2="80"
                y2="50"
                stroke="black"
                strokeWidth="4"
              />
              <polygon points="80,50 70,40 70,60" fill="black" />
            </svg>
          </button>
        </Link>
      </div>

      <Filters/>

      <FeaturedItems/>


      <RecentPosts/>
    </div>
  );
}
