const jwt = require('jsonwebtoken');
// const User = require('../models/User');
const User = require('./models/User')
// const token = require('./Router/CreateUser');
const { default: jwtDecode } = require('jwt-decode');

const authMiddleware = async (req, res, next) => {
    // Get the token from the request headers
    const token = req.header("Authorization");  
    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }
  
    try {
      // Verify the token
      const decoded = jwtDecode(token);
  
      // Extract the user ID from the decoded token
      const userId = decoded.user.id;
  
      // Find the user in the database
      const user = await User.findOne({ _id: userId });
  
      // Check if the user exists
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      // Set the user information in the request object
      req.user = {
        id: user._id,
        name: user.name
      };
  
      // Call the next middleware or route handler
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authMiddleware;
  