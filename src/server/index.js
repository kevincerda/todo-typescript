const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(PORT, err => {
  err
    ? console.err(`Error starting server on port ${PORT}: ${err}`)
    : console.log(`Server is listening on port ${PORT}`);
});
