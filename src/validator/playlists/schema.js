const Joi = require('joi');

const PostPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const PostSongToPlaylistPayloadSchema = Joi.object({
  song_id: Joi.string().required(),
});

module.exports = { PostPlaylistPayloadSchema, PostSongToPlaylistPayloadSchema };
