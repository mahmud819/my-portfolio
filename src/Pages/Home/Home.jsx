import React from "react";
import { motion } from "motion/react"
import { FaBeer, FaFacebook } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex justify between w-[94%] p-4 pt-10  mx-auto items-center rounded-lg">

      <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} className="w-1/2">
        <img
          className="rounded-full w-[70%] p-4"
          src="https://i.ibb.co.com/Y7nfM5DG/mylasted.jpg"
          alt="photo"
        />
      </motion.div>

      <motion.div animate={{ rotate: 360 }}
            transition={{ duration: 1 }} className="w-1/2">
        <div className=" w-[90%] text-center text-white bg-gray-500 rounded-lg p-4">
            <p className="text-2xl">Hellow</p>
               
          <h1 className="text-3xl py-2">This is <span className="font-bold">Mahmudur Rahman</span> </h1>
          <p className="">I am a web developer</p>
          <p>I build and debug all kind of website </p>
          <div className=" mx-auto flex justify-center  py-4 gap-x-2" >
            <a href="https://www.facebook.com/mahmudur.rahman.921803"><FaFacebook className="text-3xl" /></a>
            <a href="https://www.linkedin.com/in/md-mahmudur-rahman-3916a52b8"><FaLinkedin className="text-3xl" /></a>
            <a href="https://github.com/mahmud819"><FaGithub className="text-3xl" /></a>
            
          </div>
          <div>
          <a href="https://drive.google.com/file/d/1pE9yOgcptlcrBghaOXlQxWyCXQmHVYZ9/view?usp=sharing" className="btn  btn-success">Russume</a>
          </div>
        </div>
      </motion.div>

    

    </div>
  );
};

export default Home;
