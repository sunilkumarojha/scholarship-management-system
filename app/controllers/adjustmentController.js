const manualAdjustments = [];

const submitManualAdjustment = (req, res) => {
  const { data } = req.body;

  // Save manual adjustment data to the database or perform desired actions
  manualAdjustments.push(data);

  // Send a response to the client
  res.json({ message: 'Manual adjustment submitted successfully' });
};

module.exports = {
  submitManualAdjustment,
};
