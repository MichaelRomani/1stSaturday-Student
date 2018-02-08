const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Students = require('./routes/students')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/students', Students);

app.listen(3000, function() {
  console.log('Server is listening on port 3000!');
})
