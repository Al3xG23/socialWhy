const { Schema, Types } = require('mongoose');
const friendSchema = require('./Friends');
const userSchema = require('./User');
const thoughtSchema = require('./Thought');

// TODO
// Schema for Reaction
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionTitle: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 3,
            default: 'Unnamed reaction',
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 250,
            minlength: 3,
            default: 'Empty reaction',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;