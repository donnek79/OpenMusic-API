const Joi = require('joi');

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});
const AlbumLikesPayloadSchema = Joi.object({
  albumId: Joi.string().max(50).required(),
  userId: Joi.string().max(50).required(),
});

module.exports = { AlbumPayloadSchema, AlbumLikesPayloadSchema };
