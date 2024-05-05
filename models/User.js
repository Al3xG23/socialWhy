const { Schema, model } = require('mongoose');

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
            max_length: 50,
        },
        reactions: [reactionScheam],
        thoughts: [thoughtSchema],
        friends: [friendSchema],
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