import express, { Request, Response } from 'express';
import Client from "../models/Client";
import bcrypt from "bcrypt";
import crypto from "crypto";
import Authentication from "../models/Authentication";
import {body, validationResult} from "express-validator";
import User from "../models/User";
import jwt from "jsonwebtoken";
import authenticate from "../middleware/authMiddleware";
import AuthController from "../controllers/auth.controller";

const router = express.Router();


router.post('/login', AuthController.login);

// Route for authentication
// router.post('/auth', async (req: Request, res: Response) => {
//   const {client_secret, user} = req.body;
//   try {
//     const {redirect_uri, client_id, state} = req.query;
//
//     // Check if the client_id and redirect_uri are valid
//     const client: any = await Client.findOne({clientId: client_id}).exec();
//
//     if (!client || !client.clientSecret || !client.redirectUri || !await bcrypt.compare(client_secret, client.clientSecret) || client.redirectUri !== redirect_uri) {
//       return res.status(400).json({error: 'Invalid client_id, client_secret, or redirect_uri'});
//     }
//
//     const code = crypto.randomBytes(16).toString('hex');
//
//     // Save the auth code to the database with the user ID
//     await Authentication.create({
//       code,
//       clientId: client_id,
//       redirectUri: redirect_uri,
//       userId: user.id
//     });
//     res.redirect(`${redirect_uri}?code=${code}&state=${state}`);
//   } catch (err) {
//     res.status(500).json({error: 'An error occurred'});
//   }
// });

router.post('/token', [
  body('code').isLength({min: 5}),
  body('client_id').isLength({min: 5}),
  body('client_secret').isLength({min: 5}),
  body('redirect_uri').isURL(),
  body('grant_type').equals('authorization_code'),
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  const {code, client_id, client_secret, redirect_uri, grant_type} = req.body;

  // Check if the client_id, client_secret, and redirect_uri are valid
  const client: any = await Client.findOne({clientId: client_id}).exec();

  if (!client || client.clientSecret !== client_secret || client.redirectUri !== redirect_uri) {
    return res.status(400).json({error: 'Invalid client_id, client_secret, or redirect_uri'});
  }

  const Auth: any = await Authentication.findOne({code}).exec();
  // Check if the auth code exists
  if (!Auth) {
    return res.status(400).json({error: 'Invalid auth code'});
  }

  // Check if the auth code exists and is valid

  const user: any = await User.findById(Auth.userId).exec();

  // Check if the user exists
  if (!user) {
    return res.status(400).json({error: 'User not found'});
  }

  const accessToken = jwt.sign({userId: user.id}, 'your JWT secret', {expiresIn: '1h'});

  res.json({access_token: accessToken, token_type: 'Bearer', expires_in: 3600});
});

router.post('/register', async (req: Request, res: Response) => {
  // todo
});

router.get('/me', authenticate, async (req: any, res: any) => {
  // Check if the user is authenticated
  const user: any = await User.findById(req.user.id as any).exec();

  if (!user) {
    return res.status(404).json({error: 'User not found'});
  }

  res.json({id: user.id, username: user.username});
});

export default router;
