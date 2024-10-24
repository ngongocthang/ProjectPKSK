const Joi = require('joi');

const notificationSchema = Joi.object({
  user_id: Joi.required(),
  content: Joi.string().required(),
});

const validateNotification = (data) => {
  return notificationSchema.validate(data);
};

module.exports = validateNotification;