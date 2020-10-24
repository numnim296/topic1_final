const express = require('express');
const asyncHandler = require('express-async-handler');
const dramaCtrl = require('../controllers/drama.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
// router.route('/get/:sid').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
// router.route('/search').get(asyncHandler(search));
router.route('/delete').post(asyncHandler(deleteData));

router.route('/edit').post(asyncHandler(updateData));



async function insert(req, res) {
  let drama = await dramaCtrl.insert(req.body);
  res.json(drama);
}

// async function get(req, res) {
//   let all_students = await studentCtrl.get(req.params['sid']);
//   res.json(all_students);
// }

async function getAll(req, res) {
  let drama = await dramaCtrl.getAll();
  res.json(drama);
}


async function deleteData(req, res) {
  console.log('param => ',req.body.sid)
  let result = await dramaCtrl.testDelete(req.body.sid)
  res.json(result);
}

async function updateData(req, res) {
  console.log('param => ',req.body)
  let result = await dramaCtrl.updateDrama(req.body)
  res.json(result);
}