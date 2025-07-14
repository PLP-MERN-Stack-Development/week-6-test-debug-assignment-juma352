const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler');

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Use global error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
