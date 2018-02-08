const router = require('express').Router();
//  const Student = require('../db/models/students');

 router.get('/:studentId', function(req, res, next) {

 });

 router.get('/', function(req, res, next) {
   Student.findAll().then(students => res.json(students));
 });

 router.post('/', function(req, res, next) {

 });

 router.put('/:id', function(req, res, next) {

 });

 router.delete('/:id', function(req, res, next) {

 });

 module.exports = router;
