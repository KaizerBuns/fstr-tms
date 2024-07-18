import express from 'express';
import TrailerController from '../controllers/trailer.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();

router.post('/', TrailerController.createTrailer);

router.get('/', TrailerController.getTrailers);

router.get('/:id', TrailerController.getTrailerById);

router.put('/:id',  TrailerController.updateTrailer);

router.delete('/:id', authenticate, TrailerController.deleteTrailer);

export default router;
