const router = require('express').Router();
const Students = require('../db/students');

router.get('/', function(req, res, next) {
  res.json(Students.findAll())
});

router.get('/:studentId', function(req, res, next) {
  if(Students.findById(req.params.studentId) === undefined) {
    res.sendStatus(404);
  }
  else {
    res.json(Students.findById(req.params.studentId));
  }
});

router.post('/', function(req, res, next) {
  Students.create(req.body);
  res.status(201).json(Students.findAll());
});

router.put('/:id', function(req, res, next) {
  Students.update(req.body, req.params.id);
  res.status(203).json(Students.findAll());
});

router.delete('/:id', function(req, res, next) {
  Students.destroy(req.params.id);
  res.json(Students.findAll());
});

 module.exports = router;
