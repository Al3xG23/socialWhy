const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { } = require('./data');

connection.on('error', (err) => err);

// TODO
connection.once('open', async () => {
    console.log('connected');
    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('user');
    }
    const user = [];

    user.push({
        userName,
        email,
        reactions,
        thoughts,
        friends
    })  
     
})
