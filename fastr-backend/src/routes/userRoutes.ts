// userRoutes.ts

import express, { Request, Response } from 'express';
import {body, validationResult} from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/User";
import UserController from "../controllers/user.controller";
import authenticate from "../middleware/authMiddleware";

const router = express.Router();


router.post('/', );
router.get('/:id', authenticate, UserController.getUser);

// Route for getting all users
router.get('/', (req: Request, res: Response) => {
  // Retrieve all users logic
});

// Route for getting a specific user
router.get('/:id', authenticate, (req: Request, res: Response) => {
  // Retrieve a specific user logic
});

// Route for creating a new user
router.post('/', [
  body('username').isLength({min: 1}),
  body('password').isLength({min: 8}),
], authenticate, UserController.createUser);

// Route for updating a user
router.put('/:id', (req: Request, res: Response) => {
  // Update a user logic
});

// Route for deleting a user
router.delete('/:id', (req: Request, res: Response) => {
  // Delete a user logic
});

export default router;
