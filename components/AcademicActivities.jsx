"use client";
// AcademicActivities.jsx
import React from "react";

const AcademicActivities = () => {
  return (
    <div className="">
      <div className="font-semibold flex text-center flex-col">
        <h2 className="md:text-xl">Academic Activities</h2>
        <h3 className="md:text-xl">(0/100)</h3>
      </div>
      <div className="bg-gray-200 sm:p-2 p-1 my-3">
        {/* 1. Development of Teaching Aid (Theory &Lab) */}
        <div className="teaching-aid">
          <h1 className="text-[16px] md:text-lg font-semibold mb-3">
            1. Development of Teaching Aid (Theory &Lab)
          </h1>
          <div className="sm:mx-5 mx-1">
            <div className="flex justify-between  ">
            <div className="lg:flex lg:items-center lg:flex-row lg:gap-7 flex flex-col gap-2 lg:w-8/12 ">
              <span className="sm:text-[15px] font-semibold text-sm w-full ">
                a. Video Lectures uploaded in YouTube channel:
              </span>
              <input
                type="text"
                name=""
                id=""
                className="w-full outline outline-1 outline-gray-500 px-1 py-1 focus:outline-2 focus:outline-current"
              />
            </div>
            <div className="text-sm font-bold ">0/10</div>
            </div>
            <textarea name="" id="" className="lg:w-8/12 w-full mt-4 outline outline-1 outline-gray-500 focus:outline-2 focus:outline-current p-1 "></textarea>
          </div>
        </div>


        {/* --------------- */}
      </div>
    </div>
  );
};

export default AcademicActivities;
