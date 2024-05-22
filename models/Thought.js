// const { Schema, model } = require('mongoose');
// const friendSchema = require('./Friends');
// const reactionSchema = require('./Reaction');
// const userSchema = require('./User');

// // Schema to create Thought Model
// const thoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             minLength: 15,
//             maxLength: 500,
//         },
//         users: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'user',
//             },
//         ],
//         // userId: [
//         //     {
//         //         type: Schema.Types.ObjectId,
//         //         ref: 'user',
//         //     },
//         // ],
//     },
//     {
//         toJson: {
//             virtuals: true,
//         },
//         id: false,
//     }
// );

// const Thought = model('thought', thoughtSchema);

// module.exports = Thought;

const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJson: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;