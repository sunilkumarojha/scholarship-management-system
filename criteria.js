const isEligibleForScholarship = (studentData) => {
    // Define your eligibility criteria here
    // Example criteria: Academic performance, financial need, extracurricular activities
    const academicPerformance = studentData.gpa >= 3.5;
    const financialNeed = studentData.income < 25000; // Adjust as needed
    const extracurricularActivities = studentData.activities.includes('Leadership');
  
    // Adjust the conditions based on your specific criteria
    return academicPerformance && financialNeed && extracurricularActivities;
  };
  
  module.exports = { isEligibleForScholarship };