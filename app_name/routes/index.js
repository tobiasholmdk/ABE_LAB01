var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab1c - Express' });
});

var students = [];
var student = {
  grade: 'heh',
  name: 'heh'};


router.post('/index', (req, res) => {
  const student = {
   grade: req.body.grade,
   name: req.body.name
  }
  students.push(student)
  res.status(201).json(student)
 })

module.exports = router;
