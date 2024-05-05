const { Schema, model } = require('mongoose');
const friendSchema = require('./Friends');
const reactionSchema = require('./Reaction');
const userSchema = require('./User');

// TODO
// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtTitle: {
            type: String,
            required: true,
        },
        thoughtBody: {
            type: String,
            required: true,
        },
        user: [
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