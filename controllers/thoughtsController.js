const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async addThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtid,
      }).select('-__v');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({
        thought,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtid },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtid,
      });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async addReactionById(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtid,
      }).select('-__v');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({
        thought,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteReactionById(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtid,
      });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
