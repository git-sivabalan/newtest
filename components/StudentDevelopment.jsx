"use client";
// StudentDevelopment.jsx
import React, { useState } from "react";

const StudentDevelopment = () => {
  const [studentName, setStudentName] = useState("");
  console.log(studentName);
  return (
    <div>
      <input
        type="text"
        name="studentName"
        className="outline"
        onChange={(e) => {
          setStudentName(e.target.value);
        }}
      />
            <button className="mx-3 bg-blue-200 px-3 rounded-sm">Save</button>

    </div>
  );
};

export default StudentDevelopment;
