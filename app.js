const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Student = require('./routes/students')
const Test = require('./routes/tests')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/students', Student);
app.use('/tests', Test);

app.listen(3000, function() {
  console.log('Server is listening on port 3000!');
});
