const { Schema, model } = require('mongoose');
const mongoose = require ('mongoose');

const reactionModel = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date (timestamp).toLocaleDateString()
    }
  }
);

const thoughtModel = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionModel]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtModel.virtual('reactionCount').get(function (){
  return this.reactions.length
});

const Thought = model('thought', thoughtModel);

module.exports = Thought;
