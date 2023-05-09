const {User, Thought} = require('../models')

const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findById(req.params.id)
                .populate('thoughts')
                .populate('friends')
            res.json(user)
        }
    }
}