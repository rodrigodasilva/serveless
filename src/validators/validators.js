const Joi = require('../../utils/joiCustom')

const sendEmailSchema = Joi.object({
  headers: Joi.object({
    Authorization: Joi.string().required()
  }).unknown().required(),

  body: Joi.object({
    html: Joi.string().required().required()
  }).required()

}).unknown()

module.exports = {
  sendEmailSchema
}
