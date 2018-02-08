const router = require('express').Router();
const Students = require('../db/students');

router.get('/', function(req, res, next) {
  res.json(Students.findAll())
});

router.get('/:studentId', function(req, res, next) {
  res.json(Students.findById(req.params.studentId))
});

router.post('/', function(req, res, next) {
  Students.create(req.body)
  res.json(Students.findAll())
});

router.put('/:id', function(req, res, next) {

});

router.delete('/:id', function(req, res, next) {
  Students.destroy(req.params.id)
  const allStudents = Students.findAll()
  res.json(allStudents)
});

 module.exports = router;
