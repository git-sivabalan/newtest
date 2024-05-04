"use client";

import AcademicActivities from "@/components/AcademicActivities";
import DepartmentDevelopment from "@/components/DepartmentDevelopment";
import FacultyDevelopment from "@/components/FacultyDevelopment";
import ProfessionalDevelopment from "@/components/ProfessionalDevelopment";
import StudentDevelopment from "@/components/StudentDevelopment";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import React, { useState } from "react";

const PerformancePage = () => {
  const steps = [
    "Academic Activities",
    "Student Development",
    "Faculty Development",
    "Department Development / Institution Development",
    "Professional Development",
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div>
      {/* Display current step name, forward and previous buttons for md and smaller devices */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <button
            className={`px-2 py-1 bg-gray-200 text-black rounded ${
              activeStep == 0
                ? "disabled:bg-white disabled:text-white"
                : "block"
            }`}
            onClick={handlePrevStep}
            disabled={activeStep === 0}
          >
            <GrCaretPrevious />
          </button>
          <div className="text-md flex text-center font-semibold">
            {steps[activeStep]}
          </div>
          <button
            className={`px-2 py-1 bg-gray-200 text-black rounded ${
              activeStep == steps.length - 1
                ? "disabled:bg-white disabled:text-white"
                : "block"
            }`}
            onClick={handleNextStep}
            disabled={activeStep === steps.length - 1}
          >
            <GrCaretNext />
          </button>
        </div>
      </div>
      {/* Display all steps for lg and larger devices */}
      <div className="hidden md:block">
        <div className="flex justify-center ">
          <div className="flex space-x-5 py-5">
            
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col justify-self-center text-center  items-center py-5  cursor-pointer"
                
                onClick={() => handleStepChange(index)}
              >
                <div
                  key={index}
                  className={`flex font-medium mb-2 text-sm ${
                    index === activeStep ? "text-blue-500 font-semibold scale-110" : "text-gray-400"
                  }`}
                >{`Step ${index + 1}`}</div>

                <button
                  key={index}
                  className={`rounded-full px-4 py-2 lg:text-sm sm:text-[12px] text-sm  font-semibold ${
                    index === activeStep
                      ? "bg-blue-500 text-white "
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {step}
                </button>
  
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Render components based on activeStep */}
      <div className="mt-4">
        {/* Render components based on activeStep */}
        {activeStep === 0 && <AcademicActivities />}
        {activeStep === 1 && <StudentDevelopment />}
        {activeStep === 2 && <FacultyDevelopment />}
        {activeStep === 3 && <DepartmentDevelopment />}
        {activeStep === 4 && <ProfessionalDevelopment />}
      </div>
    </div>
  );
};

export default PerformancePage;
