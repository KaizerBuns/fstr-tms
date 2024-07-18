import express from 'express';
import TripController from '../controllers/trip.controller';
import authenticate from '../middleware/authMiddleware';
const router = express.Router();

router.post('/', authenticate, TripController.createTrip);

router.get('/', TripController.getTrips);

router.get('/:id', authenticate, TripController.getTripById);

router.put('/:id', authenticate,  TripController.updateTrip);

router.delete('/:id', authenticate, TripController.deleteTrip);

export default router;
