const router = require('express').Router();
const {
  getUsers,
  addUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriendById,
  deleteFriendById,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(addUser);

router
  .route('/:userid')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router.route('/:userid/friends').post(addFriendById);

router.route('/:userid/friends/:friendid').delete(deleteFriendById);

module.exports = router;
