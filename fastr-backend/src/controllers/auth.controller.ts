import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import bcrypt from "bcrypt";
import User from "../models/User";

class AuthController {
  async login(req: Request, res: Response) {
    console.log('ping');
    const { username, password } = req.body;
    try {
      const user: any = await UserService.getUserByUsername(username);

      if (!user || !(password === user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      //create an auth record.

      // Generate Access Token
      const accessToken = jwt.sign({ userId: user.id }, 'test', { expiresIn: '1h' });
      res.setHeader('Authorization', `Bearer ${accessToken}`);


      // Generate Refresh Token
      const refreshToken = AuthService.generateRefreshToken(user);
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true, // use this option in production (over HTTPS)
        sameSite: 'strict', // option to help prevent CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiry date (1 week in this case)
      });

      // This assumes that your User model has a method 'comparePassword'
      // bcrypt.compare(password, user);
      // const isPasswordMatch = await user.comparePassword(password);
      // if (!isPasswordMatch) {
      //   return res.status(401).json({ message: 'Invalid username or password' });
      // }
      //
      // // This assumes you have a secret key in your environment variables
      return res.json({ username, role: user.role });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error, });
    }
  }
}

export default new AuthController();
