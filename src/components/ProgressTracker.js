import React from 'react';

const ProgressTracker = ({ currentStep, totalSteps }) => {
  return (
    <div>
      <p>Step {currentStep} of {totalSteps}</p>
    </div>
  );
};

export default ProgressTracker;
