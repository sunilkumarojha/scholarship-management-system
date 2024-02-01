import React, { useState } from 'react';
import DynamicForm from '../components/DynamicForm';
import ProgressTracker from '../components/ProgressTracker';
import axios from 'axios'; // Import Axios for making HTTP requests

const FormPage = () => {
  // Sample student data received from Task 1
  const [studentData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    enrollmentDate: '2022-01-01',
    state: 'Maharashtra',
    // Add more fields based on Task 1
    // For example:
    // field1: 'value1',
    // field2: 'value2',
    // ...
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = Object.keys(studentData).length;

  // Handle form submission (e.g., send data to server)
  const onSubmitForm = async (formData) => {
    try {
      // Log the form data to the console (for demonstration purposes)
      console.log('Form submitted:', formData);

      // Make an HTTP request to the server to handle form submission
      const response = await axios.post('/api/submitForm', formData);

      // Log the server response to the console (for demonstration purposes)
      console.log('Server response:', response.data);
      
      // If needed, update the UI or navigate to the next step
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <ProgressTracker currentStep={currentStep} totalSteps={totalSteps} />
      {/* Pass studentData and onSubmitForm to DynamicForm */}
      <DynamicForm studentData={studentData} onSubmit={onSubmitForm} />
    </div>
  );
};

export default FormPage;
