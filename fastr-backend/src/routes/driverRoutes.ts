import express from 'express';
import DriverController from '../controllers/driver.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();

router.post('/',  DriverController.createDriver);

router.get('/', DriverController.getDrivers);

router.get('/:id', DriverController.getDriverById);

router.put('/:id',  DriverController.updateDriver);

router.delete('/:id', DriverController.deleteDriver);

export default router;
