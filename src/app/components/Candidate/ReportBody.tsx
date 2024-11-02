// components/Candidate/ReportBody.tsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ReportBody: React.FC = () => {
  const radarData = {
    labels: ['Efficiency', 'Readability', 'Maintainability', 'Best Practices', 'StdLib Usage'],
    datasets: [
      {
        label: 'Code Evaluation',
        data: [70, 65, 80, 75, 60], // Dummy data
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-start px-8 py-10 space-y-8">
      <div className="flex justify-between w-full space-x-8">
        {/* Overall Performance Rating */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Overall Performance Rating</h2>
          <p className="text-6xl font-bold text-[var(--foreground)]">71</p>
        </div>

        {/* Areas for Improvement */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Areas for Improvement</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]">
            <li>Time management</li>
            <li>Efficiency</li>
            <li>Standard Library Usage</li>
          </ul>
        </div>

        {/* Suitability for Role */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Suitability for Role: Senior .NET Developer</h2>
          <p className="text-6xl font-bold text-[var(--foreground)] flex items-center">
            ✓ <span className="ml-2">Suitable</span>
          </p>
        </div>
      </div>

      {/* Code Evaluation Chart */}
      <div className="w-full flex justify-center">
        <div className="w-80 p-4 border rounded-md bg-white shadow-lg">
          <h3 className="text-center text-lg font-semibold text-[var(--foreground)]">Code Evaluation</h3>
          <p className="text-center text-sm text-gray-500 mb-4">How the code stacked up against our metrics</p>
          <Radar data={radarData} options={radarOptions} />
          <p className="text-center text-sm text-gray-600 mt-4">
            Time taken to complete all of the problems: 158 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportBody;
