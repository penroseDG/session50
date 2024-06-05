// src/components/StudentSearch.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/student?studentName=${searchTerm}`);
    }
  };

  return (
    <div>
      <h1>Student Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm"
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
};

export default StudentSearch;
