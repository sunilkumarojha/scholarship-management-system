import React from 'react';
import SummaryDisplay from './SummaryDisplay';
import ManualAdjustment from './ManualAdjustment';

const Dashboard = () => {
  // Implement user authentication logic here

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SummaryDisplay />
      <ManualAdjustment />
    </div>
  );
};

export default Dashboard;
