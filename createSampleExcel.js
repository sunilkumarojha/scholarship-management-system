const xlsx = require('xlsx');

const sampleData = [
  { Name: 'John Doe', Email: 'john.doe@example.com', 'Enrollment Date': '2022-01-01' },
  { Name: 'Jane Smith', Email: 'jane.smith@example.com', 'Enrollment Date': '2022-02-01' },
  { Name: 'Bob Johnson', Email: 'bob.johnson@example.com', 'Enrollment Date': '2022-03-15' },
  { Name: 'Alice Williams', Email: 'alice.williams@example.com', 'Enrollment Date': '2022-04-20' },
  { Name: 'Chris Brown', Email: 'chris.brown@example.com', 'Enrollment Date': '2022-05-10' },
  { Name: 'Emily Davis', Email: 'emily.davis@example.com', 'Enrollment Date': '2022-06-25' },
  { Name: 'Michael Wilson', Email: 'michael.wilson@example.com', 'Enrollment Date': '2022-07-08' },
  { Name: 'Sara Miller', Email: 'sara.miller@example.com', 'Enrollment Date': '2022-08-12' },
];

const ws = xlsx.utils.json_to_sheet(sampleData);
const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

const excelFilePath = 'updatedSampleData.xlsx'; // Updated file path
xlsx.writeFile(wb, excelFilePath);

console.log(`Updated Excel file created at: ${excelFilePath}`);
