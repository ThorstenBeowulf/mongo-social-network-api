const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

//thoughtText: string, required, between 1-280 char

//createdAt: date, set default value to current timestamp
//use getter method to format timestamp on query

//username: string, required (user that created this thought)

//reactions: array of subdocuments created with reactionSchema

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
