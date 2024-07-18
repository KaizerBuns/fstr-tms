import express from 'express';
import TruckController from '../controllers/truck.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();

router.post('/', TruckController.createTruck);

router.get('/', TruckController.getTrucks);

router.get('/:id', authenticate, TruckController.getTruckById);

router.put('/:id',  TruckController.updateTruck);

router.delete('/:id', authenticate, TruckController.deleteTruck);

export default router;
