import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
require('dotenv').config();
import connectToDatabase from './database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import viewRoutes from './routes/viewRoutes';
import accountRoutes from './routes/accountRoutes';
import driverRoutes from './routes/driverRoutes';
import truckRoutes from './routes/truckRoutes';
import trailerRoutes from './routes/trailerRoutes';
import tripRoutes from './routes/tripRoutes';
import aiRoutes from './routes/aiRoutes';

const app = express();
const origin = process.env.WEB_URL ?? 'http://localhost:8080';

const corsOptions = {
  origin,
  credentials: true, // Include credentials with the request.
  exposedHeaders: ['Set-Cookie', 'Authorization'],
  httpOnly: origin !== 'http://localhost:8080'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

connectToDatabase();


// Use the routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/views', viewRoutes);
app.use('/accounts', accountRoutes);
app.use('/drivers', driverRoutes);
app.use('/trucks', truckRoutes);
app.use('/trailers', trailerRoutes);
// app.use('/assets', assetRoutes);
app.use('/trips', tripRoutes);
app.use('/ai', aiRoutes);
app.all('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({
    message: "Route not found",
  });
});


// app.get('/auth',authenticate, async (req: any, res: any) => {
//   const {client_secret} = req.body;
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
//     await AuthCode.create({
//       code,
//       clientId: client_id,
//       redirectUri: redirect_uri,
//       userId: req.user.id
//     });
//     res.redirect(`${redirect_uri}?code=${code}&state=${state}`);
//   } catch (err) {
//     res.status(500).json({error: 'An error occurred'});
//   }
// });

// app.post(
//   '/token',
//   [
//     body('code').isLength({min: 5}),
//     body('client_id').isLength({min: 5}),
//     body('client_secret').isLength({min: 5}),
//     body('redirect_uri').isURL(),
//     body('grant_type').equals('authorization_code'),
//   ],
//   async (req: any, res: any) => {
//     if (!errors.isEmpty()) {
//       return res.status(400).json({errors: errors.array()});
//     }
//     const {code, client_id, client_secret, redirect_uri, grant_type} = req.body;
//
//     // Check if the client_id, client_secret, and redirect_uri are valid
//     const client: any = await Client.findOne({clientId: client_id}).exec();
//
//     if (!client || client.clientSecret !== client_secret || client.redirectUri !== redirect_uri) {
//       return res.status(400).json({error: 'Invalid client_id, client_secret, or redirect_uri'});
//     }
//
//     const authCode: any = await AuthCode.findOne({code}).exec();
//     // Check if the auth code exists
//     if (!authCode) {
//       return res.status(400).json({error: 'Invalid auth code'});
//     }
//
//     // Check if the auth code exists and is valid
//
//     const user: any = await User.findById(authCode.userId).exec();
//
//     // Check if the user exists
//     if (!user) {
//       return res.status(400).json({error: 'User not found'});
//     }
//
//     const accessToken = jwt.sign({userId: user.id}, 'your JWT secret', {expiresIn: '1h'});
//
//     res.json({access_token: accessToken, token_type: 'Bearer', expires_in: 3600});
//   });

// app.get('/me', authenticate, async (req: any, res: any) => {
//   // Check if the user is authenticated
//   const user: any = await User.findById(req.user.id as any).exec();
//
//   if (!user) {
//     return res.status(404).json({error: 'User not found'});
//   }
//
//   res.json({id: user.id, username: user.username});
// });

// Route to create a user
// app.post(
//   '/users',
//   [
//     body('username').isLength({min: 1}),
//     body('password').isLength({min: 8}),
//   ],
//   async (req: any, res: any) => {
//     if (!errors.isEmpty()) {
//       return res.status(400).json({errors: errors.array()});
//     }
//
//     const {username, password} = req.body;
//
//     const hashedPassword = await bcrypt.hash(password, 10);
//
//     const user: any = await User.create({username, password: hashedPassword});
//
//     res.json({id: user.id, username: user.username});
//   }
// );

// Route to create a client
// app.post(
//   '/clients',
//   [
//     body('clientId').isLength({min: 1}),
//     body('clientSecret').isLength({min: 8}),
//     body('redirectUri').isURL(),
//   ],
//   async (req: any, res: any) => {
//     if (!errors.isEmpty()) {
//       return res.status(400).json({errors: errors.array()});
//     }
//
//     const {clientId, clientSecret, redirectUri} = req.body;
//
//     const hashedClientSecret = await bcrypt.hash(clientSecret, 10);
//
//     const client: any = await Client.create({clientId, clientSecret: hashedClientSecret, redirectUri});
//
//     res.json({id: client.id, clientId: client.clientId, redirectUri: client.redirectUri});
//   }
// );

app.listen(3000, () => console.log('Server running on port 3000'));
