const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

router
.route('/api/thoughts')
.get(getAllThoughts) 
.post(createThought);

router
.route('/api/thoughts/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/api/thoughts/:thoughtsId/reactions')
.post(createReaction);

router
.route('/api/thoughts/:thoughtsId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;