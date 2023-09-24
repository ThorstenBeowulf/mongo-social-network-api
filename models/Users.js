const { Schema, model } = require('mongoose');
const Thought = require('./Thoughts');
//username: string, required, unique, trimmed

//email: string, required, unique, match email validation

//thoughts: array of _id reference Thought model

//friends: array of _id self-reference This User model

//create a virtual friendCount that gets length of friends field and returns it in json

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length();
});

const User = model('user', userSchema);

module.exports = User;
