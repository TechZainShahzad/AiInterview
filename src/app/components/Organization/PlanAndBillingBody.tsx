'use client';

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const PlanAndBillingBody: React.FC = () => {
  // Dummy data for the insights
  const monthlyCost = 456;
  const weeklyCost = 105;
  const todaysCost = 40;

  const monthlyCostProjectionData = {
    labels: ['24 Jan', '25', '26', '27', '28', '30', '31'],
    datasets: [
      {
        label: 'Monthly Cost Projection',
        data: [2500, 2700, 3000, 3200, 3500, 4000, 4500],
        fill: false,
        borderColor: '#1E40AF',
        tension: 0.1,
      },
    ],
  };

  const twelveMonthCostData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '12 Month Cost Overview',
        data: [2000, 3000, 2500, 4000, 3500, 4300, 3800, 3900, 3500, 4500, 4200, 4000],
        backgroundColor: '#1E3A8A',
      },
    ],
  };

  return (
    <div className="container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top 3 boxes */}
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box for Monthly's Cost */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-700">This Month&apos;s Cost</h3>
          <p className="text-3xl font-bold text-gray-900">${monthlyCost}</p>
          <p className="text-sm text-green-600">+20% month over month</p>
        </div>
        {/* Box for Weekly's Cost */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-700">This Week&apos;s Cost</h3>
          <p className="text-3xl font-bold text-gray-900">${weeklyCost}</p>
          <p className="text-sm text-red-600">-8% week over week</p>
        </div>
        {/* Box for Today's Cost */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-700">Today&apos;s Cost</h3>
          <p className="text-3xl font-bold text-gray-900">${todaysCost}</p>
          <p className="text-sm text-green-600">+33% day over day</p>
        </div>
      </div>

      {/* Monthly Cost Projection Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium text-gray-700">Monthly Cost Projection</h3>
        <Line data={monthlyCostProjectionData} />
      </div>

      {/* Business Plan Info */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">Plan: Business</h3>
        <p className="text-3xl font-bold text-gray-900">$499/month</p>
        <p className="text-sm text-gray-600">Payment Method: MasterCard ending in 4487</p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔ 1000 interviews/month</li>
          <li>✔ See Interview History</li>
          <li>✔ Download Reports</li>
          <li>✔ 100GB storage</li>
          <li>✔ 24/7 priority support</li>
          <li>✔ Upload question bank</li>
          <li>✔ API access</li>
          <li>✔ Advanced security features</li>
        </ul>
      </div>

      {/* Bill & Payment History */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium text-gray-700">Bill & Payment History</h3>
        <table className="w-full mt-4 text-left">
          <thead>
            <tr className="text-gray-700">
              <th>Bill Month</th>
              <th>Amount</th>
              <th>Pay-Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun</td>
              <td>$4321</td>
              <td>03/07/23</td>
            </tr>
            <tr>
              <td>Jul</td>
              <td>$4033</td>
              <td>07/08/23</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>

      {/* 12 Month Cost Overview Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium text-gray-700">12 Month Cost Overview</h3>
        <Bar data={twelveMonthCostData} />
      </div>
    </div>
  );
};

export default PlanAndBillingBody;
