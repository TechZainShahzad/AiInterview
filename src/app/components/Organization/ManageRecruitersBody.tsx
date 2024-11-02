import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaFilter, FaUser } from 'react-icons/fa'; // Importing necessary icons

const ManageRecruiters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recruiters = ['Gabriel K.', 'Amanda R.', 'Jacob S.', 'Alex M.', 'George W.', 'Anna L.'];

  // Filter recruiters based on search term
  const filteredRecruiters = recruiters.filter((recruiter) =>
    recruiter.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen p-14">
      {/* Title */}
      <h1 className="text-foreground text-sx font-inter mb-4 font-semibold">Manage Recruiters</h1>

      {/* Input field and buttons row */}
      <div className="flex space-x-96 items-center mb-6">
        {/* Search Input */}
        <div className="flex items-center border border-foreground p-2 rounded-lg">
          <FaSearch className="text-foreground mr-2" />
          <input    
            type="text"
            placeholder="Search recruiters..."
            className="w-full placeholder:text-foreground text-foreground bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Right-side buttons */}
        <div className="flex space-x-4 h-full">
          {/* Filter button */}
          <button className="flex items-center bg-foreground text-background px-4 py-2 rounded-lg hover:bg-gray-700 transition h-full">
            <FaFilter className="mr-2" />
            Filter
          </button>

          {/* Add Recruiter button */}
          <button className="flex items-center bg-foreground text-background px-4 py-2 rounded-lg hover:bg-gray-700 transition h-full whitespace-nowrap">
            <FaUserPlus className="mr-2" />
            Add Recruiter
          </button>
        </div>
      </div>

      {/* Recruiters List */}
      <div className="bg-background">
        <div className="text-foreground mb-2">Name</div>

        {/* List of filtered recruiters */}
        <ul>
          {filteredRecruiters.map((name) => (
            <li key={name} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span className="text-foreground">{name}</span>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <FaUser />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageRecruiters;
