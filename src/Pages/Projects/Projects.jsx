import React from "react";
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div>
      <div className="py-6">
        <hr className="w-36 mx-auto " />
        <h1 className="py-2 text-2xl font-bold text-white">My Projects</h1>
        <hr className="w-36 mx-auto " />
        <p className="text-center w-[60%] mx-auto text-white py-4">I've been complated many projects last few months. In this project, I've been used HTML,CSS,Talwind,JavaScript,React,Express,Firebase,Mongodb. I make this projects all devices responsive. Here, I share some projects</p>
      </div>
    <div className="grid grid-cols-1 mx-auto rounded-lg py-4 px-2  gap-2 bg-gray-300 w-[94%] lg: grid-cols-3">

      <motion.div whileHover={{ scale: .8 }}
            whileTap={{ scale: 0.8 }}
             className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">Fittness</h2>
          <p>This application is designed for GYM users and trainer</p>
          <div className="flex gap-x-2">
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">HTML</h1>
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">CSS</h1>
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">JS</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/my-sec-assignment-repo">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://mahmud819.github.io/my-sec-assignment-repo/">View Live</a></button>
          </div>
        </div>
      </motion.div>


      <motion.div whileHover={{ scale: .8 }}
            whileTap={{ scale: 0.8 }} className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">BPL Dream-11</h2>
          <p>This site is design for player selection for bpl events</p>
          <div className="flex gap-x-2">
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">HTML</h1>
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">CSS</h1>
            <h1 className="w-[30%] text-center border border-2 rounded-full px-2 text-white ">JS</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/bpl-dream-11">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://startling-faun-41fe1e.netlify.app">View Live</a></button>
          </div>
        </div>
      </motion.div>
      

      <motion.div whileHover={{ scale: .8 }}
            whileTap={{ scale: 0.8 }} className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">Peddy-Hub</h2>
          <p>This application is build for buy and sold of differnt kind of pets</p>
          <div className="grid grid-cols-3 gap-1">
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">HTML</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">CSS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">Talwind</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">Js</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/peddy-repo">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://pet-adoption-platform819.netlify.app">View Live</a></button>
          </div>
        </div>
      </motion.div>


      <motion.div whileHover={{ scale: .8 }}
            whileTap={{ scale: 0.8 }} className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">Volunteer Mangement (client site)</h2>
          <p>This Application is design for manage volunteer for different events.</p>
          <div className="grid grid-cols-3 gap-1">
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">HTML</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">CSS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">JS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">React</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">Firebase</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full  text-white ">Mongodb</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/coupon-collecting-application">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://bd-jobs-protlar.web.app">View Live</a></button>
          </div>
        </div>
      </motion.div>


      <motion.div whileHover={{ scale: .8 }}
            whileTap={{ scale: 0.8 }} className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">Coupon Collecting Application (client site)</h2>
          <p>This site is design for collecting different kinds of coupons. User can collect coupon easay</p>
          <div className="grid grid-cols-3 gap-1">
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">HTML</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">CSS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">JS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">React</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">Firebase</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full  text-white ">Mongodb</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/coupon-collecting-application">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://idyllic-bubblegum-6e853f.netlify.app">View Live</a></button>
          </div>
        </div>
      </motion.div>


      <motion.div whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.4 }} className="rounded-xl bg-neutral text-neutral-content w-[100%]">
        <div className="card-body text-left">
          <h2 className="text-left text-2xl font-bold">Game Review Application (client site)</h2>
          <p>This application is design for reviewing for games.</p>
          <div className="grid grid-cols-3 gap-1">
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">HTML</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">CSS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">JS</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-4 text-white ">React</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full px-2 text-white ">Firebase</h1>
            <h1 className="w-[100%] text-center border border-2 rounded-full  text-white ">Mongodb</h1>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-sm btn-outline btn-primary text-white"><a href="https://github.com/mahmud819/game-review-client">View Code</a></button>
            <button className="btn btn-sm btn-outline btn-secondary "><a href="https://game-review-application.web.app">View Live</a></button>
          </div>
        </div>
      </motion.div>
     
    </div>
    </div>
  );
};

export default Projects;
