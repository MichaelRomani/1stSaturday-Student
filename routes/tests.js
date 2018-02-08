const router = require('express').Router();
const Test = require('../db/Tests');

//Get all tests
router.get('/', function(req, res, next) {
  res.json(Test.findAll());
});

//Get all tests with scores at or above 70
router.get('/passing', function(req, res, next) {
  res.json(Test.passing());
});

//Get test by id
router.get('/:id', function(req, res, next) {
  if (!Test.findById(req.params.id)) return res.sendStatus(404);
  res.json(Test.findById(req.params.id));
});

//Get all tests of a particular subject
router.get('/subject/:subject', function(req, res, next) {
  if (!Test.findBySubject(req.params.subject)) return res.sendStatus(404);
  res.json(Test.findBySubject(req.params.subject));
});

//Create a new test and send status of 201
//the request body will look like {subject: 'some subject', grade: someinteger}
router.post('/', function(req, res, next) {
  res.status(201).json(Test.create(req.body));
});

//Delete a test
router.delete('/:id', function(req, res, next) {
  if (!Test.destroy(req.params.id)) return res.sendStatus(404);
  // console.log(Test.destroy(req.params.id), 'what are you')
  res.json(Test.destroy(req.params.id));
});

module.exports = router;
