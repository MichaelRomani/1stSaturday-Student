const router = require('express').Router();
const Students = require('../db/students');

//Get all students
router.get('/', function(req, res, next) {
  res.json(Students.findAll())
});

//Get student by id
router.get('/:studentId', function(req, res, next) {
  if (Students.findById(req.params.studentId) === undefined) {
    res.sendStatus(404);
  }
  else {
    res.json(Students.findById(req.params.studentId));
  }
});

//Create a new student and send status of 201
router.post('/', function(req, res, next) {
  res.status(201).json(Students.create(req.body));
});

//Update a student
router.put('/:id', function(req, res, next) {
  if (!Students.destroy(req.params.id)) return res.sendStatus(404);
  res.status(203).json(Students.update(req.body, req.params.id));
});

//Delete a student
router.delete('/:id', function(req, res, next) {
  if (!Students.destroy(req.params.id)) return res.sendStatus(404);
  res.json(Students.destroy(req.params.id));
});

 module.exports = router;
