const router = require('express').Router();
// TODO
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    createThought,
    deleteThought,
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

module.exports = router;