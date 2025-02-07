import React from "react";

const Education = () => {
  return (
    <div>
      <div className="py-8">
        <hr className="w-36 mx-auto " />
        <h1 className="py-2 text-2xl font-bold text-white">Qualification</h1>
        <hr className="w-36 mx-auto " />
        </div>
    <div className="w-[94%] grid grid-cols-1 gap-2 mx-auto rounded-lg p-4 bg-gray-300  lg:grid-cols-2">
      <div className="w-[100%]  mx-auto">
        <div className="card bg-neutral text-neutral-content p-0">
          <div className="card-body items-center text-center p-4">
            <p>2020</p>
            <h2 className="card-title">BSc in EEE</h2>
            <p>Sonargoan University</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto">
        <div className="card bg-neutral text-neutral-content p-0">
          <div className="card-body items-center text-center p-4">
            <p>2012-2014</p>
            <h2 className="card-title">Higher School Certificate (HSC)</h2>
            <p>Daudpur Degree Colleage</p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto">
        <div className="card bg-neutral text-neutral-content p-0">
          <div className="card-body items-center text-center p-4">
            <p>2010-2012</p>
            <h2 className="card-title">Secondary School Certificate (SSC)</h2>
            <p>Daudpur M.L High </p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Education;
