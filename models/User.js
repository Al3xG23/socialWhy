const { Schema, model } = require('mongoose');
const friendsSchema = require('./Friends');
const reactionSchema = require('./Reaction');
const thoughtSchema = require('./Thought');

// TODO
// Schema to create User Model
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            maxl_ength: 50,
        },
        reactions: [reactionSchema],
        thoughts: [thoughtSchema],
        friends: [friendsSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;

module.exports = User;