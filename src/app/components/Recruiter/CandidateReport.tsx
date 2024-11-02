import React, { useState, useEffect } from 'react';
import { Radar, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  BarElement,
  ChartData,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  BarElement
);

const CandidateReportBody: React.FC = () => {
  const [radarData, setRadarData] = useState<ChartData<'radar'>>({
    labels: [],
    datasets: [],
  });

  const [donutData, setDonutData] = useState<ChartData<'doughnut'>>({
    labels: [],
    datasets: [],
  });

  const [barData, setBarData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [],
  });

  // Skill data and performance data are now defined as constants
  const skills = [
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 65 },
    { name: 'C#', level: 80 },
    { name: 'Java', level: 70 },
  ];

  const performance = [
    { category: 'Problem Solving', score: 70 },
    { category: 'Code Efficiency', score: 80 },
    { category: 'Code Readability', score: 75 },
    { category: 'Standard Library Usage', score: 65 },
    { category: 'Time Management', score: 90 },
  ];

  useEffect(() => {
    setRadarData({
      labels: ['Problem Solving', 'Code Efficiency', 'Code Readability', 'Standard Library Usage', 'Time Management'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: 'rgba(34, 202, 236, 0.2)',
          borderColor: 'rgba(34, 202, 236, 1)',
          pointBackgroundColor: 'rgba(34, 202, 236, 1)',
          data: [70, 80, 75, 65, 90],
        },
      ],
    });

    setDonutData({
      labels: ['Time Efficiency', 'Resource Usage', 'Code Reusability'],
      datasets: [
        {
          data: [40, 35, 25],
          backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
          hoverBackgroundColor: ['#66BB6A', '#FFB74D', '#EF5350'],
        },
      ],
    });

    setBarData({
      labels: performance.map(item => item.category),
      datasets: [
        {
          label: 'Scores',
          data: performance.map(item => item.score),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [performance]);

  return (
    <div className="bg-[#F1F5F9] p-6 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl font-semibold">
              NK
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Nathan Krueger</h1>
              <p className="text-sm font-medium text-gray-500">Senior .NET Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="px-4 py-2 text-green-600 bg-green-100 rounded-full font-medium">Passed</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Download Resume</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">Reject</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Overall Performance Rating</h2>
            <div className="flex items-center mb-4">
              <span className="text-4xl font-semibold text-gray-800 mr-4">71</span>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '71%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center justify-center">
            <img
              src="/Images/profile.jpg" // Replace with your profile image path
              alt="Profile"
              className="w-full h-full border border-gray-200" // Square shape
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Code Evaluation</h2>
            <div style={{ height: '400px' }}>
              <Radar data={radarData} options={{ maintainAspectRatio: true }} />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Time taken to complete all of the problems: 158 minutes</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Skill Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <h3 className="text-gray-700">{skill.name}</h3>
                <div className="w-full h-4 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${skill.level}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Efficiency Analysis</h2>
            <div style={{ height: '400px' }}>
              <Doughnut data={donutData} options={{ maintainAspectRatio: true }} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Areas for Improvement</h2>
            <div style={{ height: '400px' }}>
              <Bar data={barData} options={{ maintainAspectRatio: true }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CandidateReportBody;
