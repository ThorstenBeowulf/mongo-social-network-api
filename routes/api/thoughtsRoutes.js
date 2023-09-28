const router = require('express').Router();
const {
  getThoughts,
  addThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReactionById,
  deleteReactionById,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(addThought);

router
  .route('/:thoughtid')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

router.route('/:thoughtid/reaction').post(addReactionById);

router.route('/:thoughtid/reaction/:reactionid').delete(deleteReactionById);

module.exports = router;
