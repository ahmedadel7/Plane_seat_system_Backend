const AuthService = require('../services/auth');

module.exports.auth = async (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('Unauthorized.');
    }

    const tokenPayload = await AuthService.auth(token);

    req.jwtPayload = tokenPayload;
    
    next();
  } catch (err) {
    res.status(403).send({
      error: 'Unauthorized'
    });
  }
};
