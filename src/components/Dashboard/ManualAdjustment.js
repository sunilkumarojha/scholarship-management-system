import React, { useState } from 'react';
import axios from 'axios';

const ManualAdjustment = () => {
  const [adjustmentData, setAdjustmentData] = useState('');

  const handleAdjustmentChange = (e) => {
    setAdjustmentData(e.target.value);
  };

  const handleAdjustmentSubmit = async () => {
    try {
      // Send manual adjustment data to the backend API
      const response = await axios.post('/api/manual-adjustment', { data: adjustmentData });
      console.log('Manual adjustment submitted:', response.data.message);
      // Handle any additional actions after successful submission
    } catch (error) {
      console.error('Error submitting manual adjustment:', error.message);
      // Handle errors or show user-friendly messages
    }
  };

  return (
    <div>
      <h2>Manual Adjustment</h2>
      <textarea
        placeholder="Enter manual adjustment data..."
        value={adjustmentData}
        onChange={handleAdjustmentChange}
      />
      <button onClick={handleAdjustmentSubmit}>Submit Manual Adjustment</button>
    </div>
  );
};

export default ManualAdjustment;
