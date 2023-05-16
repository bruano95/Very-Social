const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createNewThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      // await User.deleteMany({ _id: { $in: thought.User } });
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  // Add new reaction
  async addNewReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({
        _id: req.params.thoughtId
      },{$addToSet:{reactions:req.body}});
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({
        _id: req.params.thoughtId
      },{$pull:{reactions:{
        reactionId:req.params.reactionId
      }}});
      console.log(thought)
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

