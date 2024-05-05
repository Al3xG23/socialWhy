const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const allUsers = async () => {
    const numberOfUser = await User.aggregate()
        .count('userCount');
    return numberOfUser;
}

module.exports = {
    // TODO

    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                users,
                allUsers: await allUsers(),
            };
            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID!' })
            }
            res.json({
                user,
                // TODO get thoughts for the user
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'User does not exist!' });
            }
            // TODO Not sure if this is right
            const thought = await Thought.findAndRemove(
                { thought: req.params.userId },
                { $pull: { thought: req.params.userId } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({
                    message: 'User Deleted, but no thoughts found!',
                });
            }
            res.json({ message: 'User succesfully deleted!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user with this id! ' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add a Users thought
    async createThought(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { thought: { thoughtId: req.params.thoughtId } } },
                { runValidators: true, new: true }
            );
            if(!user) {
                return res.status(404).json({ message: ' No user exists with that Id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Remove a Users Thought
    async deleteThought(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { thought: { thoughtId: req.params.thoughtId } } },
                { runValidators: true, new: true }
            );
            if(!user) {
                return res.status(404).json({ message: ' No user exists with that Id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};