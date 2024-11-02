// components/Candidate/ReviewBody.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReviewBody: React.FC = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
    if (error) setError(''); // Clear error on input change
  };

  const validateForm = () => {
    if (!feedback.trim()) {
      setError('Feedback field cannot be empty.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Simulate API call to save data
      console.log('Feedback submitted:', feedback);
      setShowSuccess(true);
      
      // Clear feedback after successful submission
      setFeedback('');

      // Hide success notification after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleViewReportClick = () => {
    router.push('/candidate/Report');
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center">
      <div className="w-full max-w-lg p-8 space-y-6 ml-[2px]">
        <h1 className="text-4xl font-semibold text-[var(--foreground)] font-inter">Interview Review</h1>
        <a 
          onClick={handleViewReportClick} 
          className="text-[var(--foreground)] underline text-sm font-inter cursor-pointer"
        >
          View your report
        </a>
        
        <label htmlFor="feedback" className="block text-[var(--foreground)] font-medium font-inter">
          Your feedback
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Write your feedback..."
          className={`w-full h-36 p-4 rounded border bg-[var(--background)] text-[var(--foreground)] placeholder:text-gray-500 font-inter ${
            error ? 'border-red-500' : 'border-[var(--foreground)]'
          }`}
        ></textarea>
        {error && <span className="text-red-500 text-sm">{error}</span>}

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] font-semibold font-inter"
        >
          Submit
        </button>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
          Feedback submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ReviewBody;
