import jwt from "jsonwebtoken";
import User from "../models/User";

const authenticate = async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({error: 'No token provided'});
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({error: 'Token error'});
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({error: 'Token malformed'});
  }

  jwt.verify(token, 'test', async (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({error: 'Token invalid'});
    }

    // 'decoded' should be { userId: 'something' }
    const user = await User.findById(decoded.userId).exec();

    if (!user) {
      return res.status(401).send({error: 'User not found'});
    }

    req.user = user;

    return next();
  });
};

export default authenticate;
