import { Request, Response } from 'express';
import DriverService from '../services/driver.service';

class DriverController {
  async createDriver(req: Request, res: Response) {
    try {
      console.log('ping2');
      console.log('createDriver: ', req.body);
      const driver = await DriverService.createDriver(req.body);
      res.status(201).json(driver);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDrivers(req: Request, res: Response) {
    try {
      const driver = await DriverService.getDrivers();
      if (!driver) {
        res.status(404).json({ message: 'Drivers not found' });
      } else {
        res.json(driver);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getDriverById(req: Request, res: Response) {
    try {
      const driver = await DriverService.getDriverById(req.params.id);
      if (!driver) {
        res.status(404).json({ message: 'Driver not found' });
      } else {
        res.json(driver);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateDriver(req: Request, res: Response) {
    try {
      const driver = await DriverService.updateDriver(req.params.id, req.body.data);
      if (!driver) {
        res.status(404).json({ message: 'Driver not found' });
      } else {
        res.json(driver);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteDriver(req: Request, res: Response) {
    try {
      const driver = await DriverService.deleteDriver(req.params.id);
      if (!driver) {
        res.status(404).json({ message: 'Driver not found' });
      } else {
        res.json(driver);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new DriverController();
