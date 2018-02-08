const router = require('express').Router()
// const Test = require('../db/models/tests')
// const Student = require('../db/models/students')

//Get all tests with scores at or above 70
router.get('/passing', function (req, res, next) {

})

//Get all tests
router.get('/', function (req, res, next) {

})

//Get test by id
router.get('/:id', function (req, res, next) {

})

//Get all tests of a particular subject
router.get('/subject/:subject', function (req, res, next) {

})

//Create a test and 'set' student associated with it
router.post('/:studentId', function(req, res, next) {

})


//Delete a test
router.delete('/:id', function (req, res, next) {

})

module.exports = router
