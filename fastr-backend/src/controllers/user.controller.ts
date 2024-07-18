import { Request, Response } from 'express';
import UserService from '../services/user.service';
import {validationResult} from "express-validator";
import jwt from "jsonwebtoken";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // async login(req: Request, res: Response) {
  //   const { username, password } = req.body;
  //   try {
  //     const user = await UserService.getUserByUsername(username);
  //     if (!user) {
  //       return res.status(401).json({ message: 'Invalid username or password' });
  //     }
  //
  //     // This assumes that your User model has a method 'comparePassword'
  //     const isPasswordMatch = await user.comparePassword(password);
  //     if (!isPasswordMatch) {
  //       return res.status(401).json({ message: 'Invalid username or password' });
  //     }
  //
  //     // This assumes you have a secret key in your environment variables
  //     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  //     return res.json({ token });
  //   } catch (error: any) {
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // }

  // Add other controller methods as needed
}

export default new UserController();
