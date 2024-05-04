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
    "Department Development/Institution Development",
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
            className={`px-2 py-1 bg-gray-200 text-black rounded ${activeStep == 0 ? "disabled:bg-white disabled:text-white":"block"}`}
            onClick={handlePrevStep}
            disabled={activeStep === 0}
          >
            <GrCaretPrevious />
          </button>
          <div className="text-md flex text-center font-semibold">{steps[activeStep]}</div>
          <button
            className={`px-2 py-1 bg-gray-200 text-black rounded ${activeStep == steps.length - 1 ? "disabled:bg-white disabled:text-white":"block"}`}
            onClick={handleNextStep}
            disabled={activeStep === steps.length - 1}
          >
            <GrCaretNext />

          </button>
        </div>
      </div>
      {/* Display all steps for lg and larger devices */}
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            {steps.map((step, index) => (
              
              <button
                key={index}
                className={`px-4 py-2 ${
                  index === activeStep ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => handleStepChange(index)}
              >
                {step}
              </button>
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