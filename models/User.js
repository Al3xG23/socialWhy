// const { Schema, model } = require('mongoose');
// const friendsSchema = require('./Friends');
// const reactionSchema = require('./Reaction');
// const thoughtSchema = require('./Thought');

// // Schema to create User Model
// const userSchema = new Schema(
//     {
//         userName: {
//             type: String,
//             required: true,
//             max_length: 50,
//             min_length: 4,
//         },
//         email: {
//             type: String,
//             required: true,
//             max_length: 50,
//         },
//         thoughts: [{
//             type: Schema.Types.ObjectId,
//             ref: 'thoughts',
//         }],
//         thoughts: [thoughtSchema],
//         reactions: [reactionSchema],
//         friends: [friendsSchema],
//     },
//     {
//         toJSON: {
//             getters: true,
//         },
//     }
// );

// const User = model('user', userSchema);

// module.exports = User;

const { Schema, model } = require('mongoose');

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 

// Schema to create User Model
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            max_length: 50,
            min_length: 4,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [emailRegex, 'Please enter valid email address'],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;
