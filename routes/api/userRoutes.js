const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:userId').get(getOneUser).delete(deleteUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
