import React, { useState } from 'react';

const AIHireBody: React.FC = () => {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [date, setDate] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; position?: string; date?: string }>({});

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value);
    setErrors((prev) => ({ ...prev, position: '' }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setErrors((prev) => ({ ...prev, date: '' }));
  };

  const validateForm = () => {
    const newErrors: { email?: string; position?: string; date?: string } = {};
    if (!email) newErrors.email = 'Email is required.';
    if (!position) newErrors.position = 'Position is required.';
    if (!date) newErrors.date = 'Date is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleScheduleInterview = async () => {
    if (!validateForm()) return;

    try {
      // Simulate API call to save data
      console.log('Interview Scheduled:', { email, position, date });
      setShowSuccess(true);

      // Clear form after successful submission
      setEmail('');
      setPosition('');
      setDate('');

      // Hide success notification after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error scheduling interview:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[--background] px-20 py-20">
      <h1 className="text-2xl font-bold mb-4 text-left text-[--foreground]">Schedule Interview</h1>

      <div className="w-full max-w-sm space-y-4">
        {/* Candidate Email */}
        <div className="flex flex-col">
          <label className="text-[--foreground] font-medium mb-1">
            Candidate Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="johndoe@example.com"
            className={`border rounded-md px-3 py-2 text-[--foreground] focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-[--foreground]'
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>

        {/* Position Applying For */}
        <div className="flex flex-col">
          <label className="text-[--foreground] font-medium mb-1">
            Position Applying For <span className="text-red-500">*</span>
          </label>
          <select
            value={position}
            onChange={handlePositionChange}
            className={`border rounded-md px-3 py-2 text-[--foreground] focus:outline-none ${
              errors.position ? 'border-red-500' : 'border-[--foreground]'
            }`}
          >
            <option value="" disabled>Select Position</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Data Scientist">Data Scientist</option>
            {/* Add more options as needed */}
          </select>
          {errors.position && <span className="text-red-500 text-sm mt-1">{errors.position}</span>}
        </div>

        {/* Pick a Date */}
        <div className="flex flex-col">
          <label className="text-[--foreground] font-medium mb-1">
            Pick a Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className={`border rounded-md px-3 py-2 text-[--foreground] focus:outline-none ${
              errors.date ? 'border-red-500' : 'border-[--foreground]'
            }`}
          />
          {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date}</span>}
        </div>

        {/* Schedule Interview Button */}
        <button
          onClick={handleScheduleInterview}
          className="w-full bg-[--foreground] text-white rounded-md px-4 py-2 font-medium hover:bg-opacity-90 transition duration-150"
        >
          Schedule Interview
        </button>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
          Interview scheduled successfully!
        </div>
      )}
    </div>
  );
};

export default AIHireBody;
