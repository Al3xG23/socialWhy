const { Schema, model } = require('mongoose');
const friendSchema = require('./Friends');
const reactionSchema = require('./Reaction');
const userSchema = require('./User');

// TODO
// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            max_length: 50,
        },
        userId: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;