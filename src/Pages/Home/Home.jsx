import React from "react";

const Home = () => {
  return (
    <div className="flex justify between w-[94%] p-4 pt-10  mx-auto items-center rounded-lg">
      <div className="w-1/2">
        <img
          className="rounded-full w-[90%] p-4"
          src="https://i.ibb.co.com/Y7nfM5DG/mylasted.jpg"
          alt="photo"
        />
      </div>
      <div className="w-1/2">
        <div className=" w-[90%] text-center text-white bg-gray-500 rounded-lg p-4">
            <p className="text-2xl">Hellow</p>
               
          <h1 className="text-3xl py-2">This is <span className="font-bold">Mahmudur Rahman</span> </h1>
          <p className="">I am a web developer</p>
          <p>I build and debug all kind of website </p>
          <div className=" mx-auto flex gap-x-2 justify-evenly py-2" >
            <a href="">facebook</a>
            <a href="">Linkdin</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
