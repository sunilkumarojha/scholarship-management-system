import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SummaryDisplay = () => {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    // Fetch summary data from the backend API
    const fetchSummaryData = async () => {
      try {
        const response = await axios.get('/api/summary');
        setSummaryData(response.data);
      } catch (error) {
        console.error('Error fetching summary data:', error.message);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <div>
      <h2>Summary Display</h2>
      {summaryData ? (
        <ul>
          <li>Total Scholarships: {summaryData.total}</li>
          <li>Merit Scholarships: {summaryData.merit}</li>
          {/* Add more summary items based on your scholarship types */}
        </ul>
      ) : (
        <p>Loading summary data...</p>
      )}
    </div>
  );
};

export default SummaryDisplay;
