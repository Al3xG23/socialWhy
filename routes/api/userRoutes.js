const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController.js');

router
.route('/api/users')
.get(getAllUsers)
.post(createUser);

router
.route('/api/users/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router
.route('/api/users/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)


module.exports = router;