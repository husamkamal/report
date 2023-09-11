const User = require("../models/User");

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
            if(existingUser.password == password){
                return      res.status(200).json(existingUser.username);
            }
            else{
                return res.status(400).json({ error: 'password error' });
            }
      }
  
      // Create a new user
      const newUser = await User.create({ username, password });
  
      res.status(201).json(newUser.username);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = login;