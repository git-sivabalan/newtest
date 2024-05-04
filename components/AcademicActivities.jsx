"use client";
// AcademicActivities.jsx
import React, { useEffect, useState } from "react";

const AcademicActivities = () => {
  const [academicName, setAcademicName] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("academicName");
    if (storedValue) {
      setAcademicName(storedValue);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAcademicName(value);
    localStorage.setItem("academicName", value);
  };

  return (
    <div>
      <input
        type="text"
        name="academicName"
        className="outline"
        value={academicName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input type="file" name="" id="" />
    <br /><br />
      <button className="mx-3 bg-blue-200 px-3 rounded-sm">Save</button>
    </div>
  );
};

export default AcademicActivities;
