var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students', { student: student.name });
});


router.post('/index', (req, res) => {
  const student = {
   grade: req.body.grade,
   name: req.body.name
  }
  students.push(student)
  res.status(201).json(student)
 })

module.exports = router;
