const Joi = require('joi');
const Drama = require('../models/drama.model');

const dramaSchema = Joi.object({
    name: Joi.string().required(),
    imageurl: Joi.string().required(),
    daytime: Joi.string().required(),
    channel: Joi.string().required(),
    review: Joi.string().required(),
})


module.exports = {
  insert,
//   get,
//   getAll,
//   search,
//   deleteData
}

async function insert(drama) {
  drama = await Joi.validate(drama, dramaSchema, { abortEarly: false });
  return await new Drama(drama).save();
}

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
// async function get(sid) {
//   return await Student.find({sid: sid});
// }

// async function getAll() {
//   return await Student.find();
// }

// async function search(key, value) {
//   let query = {};
//   query[key] = value;
//   return await Student.find(query);
// }

// async function deleteData(sid) {
//   return await Student.deleteOne({sid: sid});
// }