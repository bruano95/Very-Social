const {User, Thought} = require('../models')

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
    async getUser(req, res) {
        try {
          const user = await User.findById(req.params.userId)
          res.json(user);
        } catch (err) {
          console.log(err)
          res.status(500).json(err);
        }
    },
    async createNewUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({_id: req.params.userId});
            
          if (!user) {
            return res.status(404).json({ message: 'No User with that ID' });
          }
          res.json({ message: 'User deleted!' });
        } catch (err) {
          console.log(err)
          res.status(500).json(err);
        }
      },
      async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err)
          res.status(500).json(err);
        }
      },
      async addNewFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate({
            _id: req.params.userId
          },{$addToSet:{friends:req.params.friendId}});
          res.json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
      async deleteFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate({
            _id: req.params.userId
          },{$pull:{friends: req.params.friendId}});
          console.log(user)
          res.json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
}