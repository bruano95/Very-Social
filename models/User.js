const { Schema, model } = require('mongoose');

const UserModel = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: 
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  }
);

module.exports = User;
