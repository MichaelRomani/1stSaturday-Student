const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/student', Student);
app.use('/test', Test);

app.listen(3000, function() {
  console.log('Server is listening on port 3000!');
});
