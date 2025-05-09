const jwt = require('jsonwebtoken');

const generateAuthToken = (user) => {
  const payload = {
    id: user._id,
    role: user.role
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

module.exports = generateAuthToken;
