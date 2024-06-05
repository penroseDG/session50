// src/components/Student.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const Student = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const studentName = searchParams.get('studentName');

  return (
    <div>
      <h1>Student Detail</h1>
      {studentName ? (
        <p>Student Name: {studentName}</p>
      ) : (
        <p>No student selected</p>
      )}
    </div>
  );
};

export default Student;
