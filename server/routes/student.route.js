const express = require('express');
const asyncHandler = require('express-async-handler');
const studentCtrl = require('../controllers/student.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
router.route('/get/:sid').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));
router.route('/delete').post(asyncHandler(deleteData));


async function insert(req, res) {
  let student = await studentCtrl.insert(req.body);
  res.json(student);
}

async function get(req, res) {
  let all_students = await studentCtrl.get(req.params['sid']);
  res.json(all_students);
}

async function getAll(req, res) {
  let all_students = await studentCtrl.getAll();
  res.json(all_students);
}

async function search(req, res) {
  let result = await studentCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}

async function deleteData(req, res) {
  let result = await studentCtrl.deleteData(req.body.sid);
  res.json(result);
}