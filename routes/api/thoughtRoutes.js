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
.route('/')
.get(getAllThoughts) 
.post(createThought);

router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtsId/reactions')
.post(createReaction);

router
.route('/:thoughtsId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;