import express from 'express';
import AiController from '../controllers/ai.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();
router.post('/trips/vector/search', AiController.vectorSearch);


export default router;

