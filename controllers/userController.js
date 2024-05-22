const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        console.log('user route');
        try {
            const users = await User.find();            
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('thoughts', 'friend');
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID!' })
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Create a user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'User does not exist!' });
            }
            const thought = await Thought.findOneAndDelete(
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
    // TODO Add Friend
    async addFriend(req, res) {

    },
    // TODO Remove Friend
    async removeFriend(req,res) {

    },

};