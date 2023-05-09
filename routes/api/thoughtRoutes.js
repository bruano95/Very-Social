const router = require('express').Router();
const {
  getAllThoughts,
  getThought,
  createNewThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createNewThought);

router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addNewReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);
  
module.exports = router;
