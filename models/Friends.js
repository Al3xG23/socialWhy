const { Schema, Types } = require('mongoose');
const userSchema = require('./User');
const reactionSchema = require('./Reaction');
const thoughtSchema = require('./Thought');

// Schema for Friends
const friendsSchema = new Schema(
    {
        friendId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        friendName: {
            type: String,
            required: true,
            max_length: 50,
        },
        user: [userSchema],
        thoughts: [thoughtSchema],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = friendsSchema;