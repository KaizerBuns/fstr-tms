const jwt = require('jsonwebtoken');
class AuthService {
  generateRefreshToken(user: any) {
    const payload = {
      _id: user._id,
      type: 'refresh', // specifying the type of token
    };

    const secret = 'yourRefreshTokenSecret'; // This should be a long, unguessable string stored in environment variable
    const options = { expiresIn: '1w' }; // Token expires in 1 week

    return jwt.sign(payload, secret, options);
  }
}

export default new AuthService();
