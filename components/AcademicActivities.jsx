"use client";
// AcademicActivities.jsx
import React, { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";

const AcademicActivities = () => {
  const [formData, setFormData] = useState({
    youtubeLink: "",
    courseUploadedFile: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: file, // Update file state with the selected file
    });
  };
  const [point, setPoint] = useState({
    youtubeLink: 0,
    courseUploadedFile: 0
  });

    console.log(point);

  // Youtube Link Validator

  function YoutubeValidation(link) {
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return youtubeRegex.test(link);
  }


  // Updating Points in formData

  useEffect(() => {
    // Create a new point object based on the previous state
    setPoint(prevPoint => ({
      ...prevPoint,
      youtubeLink: (formData.youtubeLink !== '' && YoutubeValidation(formData.youtubeLink)) ? 10 : 0,
      courseUploadedFile: (formData.courseUploadedFile !== '') ? 40 : 0
    }));
  }, [formData.youtubeLink, formData.courseUploadedFile]);
  
// console.log(formData)
// console.log("")
const handleResetField = (fieldName) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    [fieldName]: "" // Set the specified field to an empty string
  }));
};
  return (
    <div className="">
      <div className="font-semibold flex text-center flex-col">
        <h2 className="md:text-xl">Academic Activities</h2>
        <h3 className="md:text-xl">(0/100)</h3>
      </div>
      <div className="bg-gray-200 sm:p-2 p-1 my-3">
        {/* 1. Development of Teaching Aid (Theory &Lab) */}
        <div className="teaching-aid">
          <h1 className="text-md md:text-lg font-semibold mb-3">
            1. Development of Teaching Aid (Theory &Lab)
          </h1>
          {/* a. Video Lectures uploaded in YouTube channel: */}
          <div className="a">
            <div className="sm:mx-5 mx-1">
              <div className="flex justify-between  ">
                <div className="lg:flex lg:items-center lg:flex-row lg:gap-7 flex flex-col gap-2 lg:w-8/12 ">
                  <span className="sm:text-[15px] font-medium text-sm w-full ">
                    a. Video Lectures uploaded in YouTube channel:
                  </span>
                  <input
                    type="text"
                    name="youtubeLink"
                    id=""
                    value={formData.youtubeLink}
                    onChange={handleInputChange}
                    className="w-full outline outline-1 outline-gray-500 px-1 py-1 focus:outline-2 focus:outline-current"
                  />
                </div>
                <div className="text-sm font-bold ">{`${point.youtubeLink}/10`}</div>
              </div>
              <textarea
                name=""
                id=""
                className="lg:w-8/12 w-full mt-4 outline outline-1 outline-gray-500 focus:outline-2 focus:outline-current p-1 "
              ></textarea>
            </div>
          </div>
          {/* b.Content development of course uploaded in LMS/ Google classroom: */}
          <div className="a mt-7">
            <div className="sm:mx-5 mx-1">
              <div className="flex justify-between">
                <div className="lg:flex lg:items-start lg:flex-row lg:gap-7 flex flex-col gap-2 lg:w-8/12">
                  <span className="sm:text-[15px] font-medium text-sm w-full pr-10 sm:pr-0">
                    b. Content development of course uploaded in LMS/ Google
                    classroom:
                  </span>
                  <div className="flex  flex-col gap-2">
                    <label
                      htmlFor="file-upload"
                      className="file-upload-button bg-blue-500 hover:bg-blue-600 text-white py-2 text-sm px-4 font-semibold rounded-sm lg:w-auto w-2/6 text-center   cursor-pointer"
                    >
                      Upload
                      <input
                        type="file"
                        name="courseUploadedFile"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileInputChange}
                      />
                    </label>
                    <span className="text-[12px] flex flex-nowrap items-center gap-3 overflow-hidden">
                      <div
                        className={`text-lg text-red-500 cursor-pointer ${
                          formData.courseUploadedFile != "" ? "block" : "hidden"
                        }`}
                        onClick={() => handleResetField("courseUploadedFile")}
                      >
                        <CiSquareRemove />
                      </div>
                      <div className="text-sm ">
                      {formData.courseUploadedFile && formData.courseUploadedFile.name.slice(0, 26)}
                      </div>
                    </span>
                  </div>
                </div>
                <div className="text-sm font-bold ">
                  {`${point.courseUploadedFile}/40`}
                </div>
              </div>
              <textarea
                name=""
                id=""
                className="lg:w-8/12 w-full mt-4 outline outline-1 outline-gray-500 focus:outline-2 focus:outline-current p-1"
              ></textarea>
            </div>
          </div>
        </div>

        {/* --------------- */}
      </div>
    </div>
  );
};

export default AcademicActivities;
