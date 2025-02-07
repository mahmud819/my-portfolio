import React from "react";
import { easeIn, motion } from "motion/react"
import { easeOut } from "motion";

const Skills = () => {
  return (
    <div>
        <div className="pb-8">
        <hr className="w-36 mx-auto " />
        <motion.h1 
        animate={{x:50}}
        transition={{duration:2 , delay:1, ease: easeOut, repeat: Infinity }}
         className="py-2 text-2xl font-bold text-white">Skills</motion.h1>
        <hr className="w-36 mx-auto " />
        </div>
    <div className="grid grid-cols-1 mx-auto rounded-lg py-4 text-black  gap-x-2 bg-gray-300 w-[94%] lg: grid-cols-4">

      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">HTML</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 15+</span> </p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">CSS</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 15+</span> </p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Talwind CSS</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 10+</span> </p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Js</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 12+</span></p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Firebase</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 8+</span> </p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Express</h1>
          <p>Total Projects : <span className="font-bold text-black text-lg "> 8+</span> </p>
        </div>
      </div>
      <div className=" rounded-md m-2 p-2 bg-gray-500 text-black">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Mongodb</h1>
          <p>Total Projects :  <span className="font-bold text-black text-lg "> 8+</span> </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
