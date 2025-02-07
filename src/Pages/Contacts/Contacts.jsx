import React from "react";

const Contacts = () => {
  
  return (
    <div className="flex flex-col bg-[#281350] to from-[#01003a] text-white min-h-screen">
        <div className="mx-auto">
                <img src="https://i.ibb.co/b2vgf5J/Animation-1725604899796.gif" alt="" />
            </div>
      <div className="hero-content text-center">
      
        <div className="max-w-md">
            
          <h1 className="text-5xl font-bold">Contact with Me</h1>
          <p className="py-6">
            I am frontend web developer. I can build and debug website. For hire and any quieris, Please contact with me...
          </p>
          <div className="text-left mx-auto inline-block">
            <p>gmail : mahmudurr819@gmail.com</p>
            
            <p>Phone : 01952053431</p>
            <p>Location : Dinajpur, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
