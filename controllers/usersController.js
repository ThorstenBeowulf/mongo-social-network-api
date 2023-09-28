const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async addUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userid }).select(
        '-__v'
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async updateUserById(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userid },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userid });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async addFriendById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userid }).select(
        '-__v'
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deleteFriendById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userid });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

