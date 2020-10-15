const { User } = require("../models");

const show_login = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
        user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const show_signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
        user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  show_login,
  show_signup,
};
