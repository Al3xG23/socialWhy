const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    createThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/userController.js');

router
.route('/')
.get(getAllUsers)
.post(createUser);

router
.route('/:userId')
.get(getSingleUser)
.delete(deleteUser)
.put(updateUser);

router
.route('/:userId/thought')
.post(createThought);

router
.route('/:userId/thought/:thoughtId')
.delete(deleteThought);

router
.route('/:userId/reaction')
.post(createReaction);

router
.route('/:userId/reaction/:reactionId')
.delete(deleteReaction);

module.exports = router;