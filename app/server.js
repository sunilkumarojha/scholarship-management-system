const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adjustmentRoutes = require('./app/routes/adjustmentRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Use the adjustment routes
app.use('/api', adjustmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
