import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Update the import for the App Router

// Define a type for Candidate
interface Candidate {
  name: string;
  date: string;
  position: string;
}

const UpcomingInterviewBody: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterPosition, setFilterPosition] = useState<string>('');
  const router = useRouter(); // Initialize the router

  const candidates: Candidate[] = [
    { name: 'Gabriel K.', date: '2023-11-01', position: 'Software Engineer' },
    { name: 'Amanda R.', date: '2023-11-02', position: 'Product Manager' },
    { name: 'Jacob S.', date: '2023-11-03', position: 'Data Scientist' },
    { name: 'Alex M.', date: '2023-11-04', position: 'UX Designer' },
    { name: 'George W.', date: '2023-11-05', position: 'Software Engineer' },
    { name: 'Anna L.', date: '2023-11-06', position: 'Product Manager' },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    const matchesDate = filterDate ? candidate.date === filterDate : true;
    const matchesPosition = filterPosition ? candidate.position === filterPosition : true;
    return matchesSearch && matchesDate && matchesPosition;
  });

  const handleCandidateClick = () => {
    // Replace '/report' with the actual path for the candidate's report page
    router.push(`/recruiter/CandidateReport`);
  };

  return (
    <div className="bg-background min-h-screen p-14">
      {/* Input field and filter button */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Input */}
        <div className="flex items-center border border-foreground p-2 rounded-lg w-full max-w-md">
          <FaSearch className="text-foreground mr-2" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full placeholder:text-foreground text-foreground bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter button aligned to the end of the row */}
        <button
          className="flex items-center bg-foreground text-background px-4 py-2 rounded-lg hover:bg-gray-700 transition ml-4"
          onClick={() => setShowFilter(true)}
        >
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>

      {/* Candidates List */}
      <div className="bg-background">
        <div className="grid grid-cols-3 text-foreground mb-2 font-semibold">
          <div>Name</div>
          <div>Date</div>
          <div>Position</div>
        </div>

        {/* List of filtered candidates */}
        <ul>
          {filteredCandidates.map((candidate) => (
            <li 
              key={candidate.name} 
              className="grid grid-cols-3 py-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-200"
              onClick={handleCandidateClick} // Use the click handler without arguments
            >
              <span className="text-foreground">{candidate.name}</span>
              <span className="text-foreground">{candidate.date}</span>
              <span className="text-foreground">{candidate.position}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <h2 className="text-foreground text-xl font-semibold mb-4">Filter Candidates</h2>
            <div className="flex flex-col space-y-4">
              {/* Filter by Date */}
              <div>
                <label className="text-foreground font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="w-full border border-foreground rounded-md px-3 py-2 text-foreground bg-transparent focus:outline-none"
                />
              </div>

              {/* Filter by Position */}
              <div>
                <label className="text-foreground font-medium mb-1">Position</label>
                <select
                  value={filterPosition}
                  onChange={(e) => setFilterPosition(e.target.value)}
                  className="w-full border border-foreground rounded-md px-3 py-2 text-foreground bg-transparent focus:outline-none"
                >
                  <option value="">All Positions</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="UX Designer">UX Designer</option>
                </select>
              </div>

              {/* Filter Actions */}
              <div className="flex space-x-4 mt-4">
                <button
                  className="bg-foreground text-background px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  onClick={() => setShowFilter(false)}
                >
                  Apply Filter
                </button>
                <button
                  className="bg-gray-300 text-foreground px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => {
                    setFilterDate('');
                    setFilterPosition('');
                    setShowFilter(false);
                  }}
                >
                  Clear Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingInterviewBody;
