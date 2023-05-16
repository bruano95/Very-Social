const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateUser,
  addNewFriend,
  deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers)
.post(createNewUser);

router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends').post(addNewFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
