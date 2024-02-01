// Import necessary modules and connect to the MongoDB database
const fs = require('fs');
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const { isEligibleForScholarship } = require('./criteria');

mongoose.connect('mongodb://localhost:27017/scholarshipDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define scholarship assignment logic
async function assignScholarship(newStudent) {
  try {
    // Example logic: Award "Merit Scholarship" to students with GPA >= 3.5
    if (newStudent.gpa >= 3.5) {
      newStudent.scholarship = 'Merit Scholarship';
      await newStudent.save();
      console.log(`${newStudent.name} has been awarded the Merit Scholarship!`);
    }
    // Add more scholarship criteria and assignments as needed
  } catch (error) {
    console.error(`Error assigning scholarship: ${error.message}`);
  }
}

// Define the importExcelData function with scholarship assignment logic
async function importExcelData(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      try {
        const newStudent = new Student({
          name: row['Name'],
          email: row['Email'],
          enrollmentDate: new Date(row['Enrollment Date']),
          state: 'Maharashtra', // Default state
          gpa: row['GPA'], // Add GPA field based on your Excel columns
          income: row['Income'], // Add Income field based on your Excel columns
          activities: row['Activities'] ? row['Activities'].split(',').map(activity => activity.trim()) : [], // Adjust as needed
        });

        await newStudent.save();

        // Check scholarship eligibility and assign scholarship if eligible
        if (isEligibleForScholarship(newStudent)) {
          console.log(`${newStudent.name} is eligible for a scholarship!`);
          await assignScholarship(newStudent); // Call the scholarship assignment logic
        }

        console.log(`Student profile created for ${newStudent.name}`);
      } catch (error) {
        console.error(`Error creating student profile: ${error.message}`);
      }
    }

    console.log('Import process completed successfully.');
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
  } finally {
    mongoose.disconnect();
  }
}

// Get the Excel file path from the command-line arguments
const excelFilePath = process.argv[2];

// Check if the file path is provided
if (!excelFilePath) {
  console.error('Please provide the path to the Excel file as a command-line argument.');
  process.exit(1);
}

// Run the importExcelData function with the provided file path
importExcelData(excelFilePath);
