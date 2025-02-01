import React from 'react'
import { FaSave, FaTrash } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

const SinglePostActions = () => {
  return (
    <div className=" flex flex-col lg:flex-row mt-12 lg:hidden gap-2  bg-white justify-between items-center lg:mt-16  rounded-3xl p-4">
    <div className=" w-full  flex gap-4 flex-wrap justify-start  ">
      <button className=" bg-blue-500 text-white px-2 rounded-full text-sm  w-max   ">
        All Posts
      </button>
      <button className="   text-gray-700 rounded-full underline text-sm   w-max  ">
        Web Design
      </button>
      <button className="  text-gray-700 rounded-full underline text-sm   w-max    ">
        Development
      </button>
      <button className="  text-gray-700  rounded-full  underline text-sm  w-max     ">
        Databases
      </button>
      <button className="  text-gray-700  rounded-full underline text-sm   w-max    ">
        Search Engines
      </button>
      <button className="  text-gray-700  rounded-full underline text-sm   w-max  ">
        Marketing
      </button>
      <span className=' text-sm flex items-center gap-1'> <FaSave/> <span>Save Post</span> </span>
        <span className=' text-red-500 text-sm flex items-center gap-1' > <FaTrash/> <span>Delete Post</span>  </span>
    </div>

  

    
  </div>
  )
}

export default SinglePostActions