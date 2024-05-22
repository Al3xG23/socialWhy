const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { seedUser, seedThoughts } = require('./data');

connection.on('error', (err) => err);

// TODO
connection.once('open', async () => {
    console.log('connected');
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];

    for (let i = 0; i < 20; i++) {
        const thoughts = seedThoughts();
        users.push({
            userName,
            email,
            reactions,
            thoughts,
            friends
        });
    }
    
    // const userData = await User.create(users);
    // await thoughts.create({
    //     thoughtText: '',
    //     users: [...userData.map(({_id}) => _id)],
    // });

    await User.insertMany(users);
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
