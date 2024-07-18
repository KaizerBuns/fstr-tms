import { Request, Response } from 'express';
import TruckService from '../services/truck.service';

class TruckController {
  async createTruck(req: Request, res: Response) {
    console.log('pingggg');
    try {
      const truck = await TruckService.createTruck(req.body);
      res.status(201).json(truck);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTrucks(req: Request, res: Response) {
    try {
      const truck = await TruckService.getTrucks();
      if (!truck) {
        res.status(404).json({ message: 'Trucks not found' });
      } else {
        res.json(truck);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTruckById(req: Request, res: Response) {
    try {
      const truck = await TruckService.getTruckById(req.params.id);
      if (!truck) {
        res.status(404).json({ message: 'Truck not found' });
      } else {
        res.json(truck);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTruck(req: Request, res: Response) {
    try {
      const truck = await TruckService.updateTruck(req.params.id, req.body);
      if (!truck) {
        res.status(404).json({ message: 'Truck not found' });
      } else {
        res.json(truck);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteTruck(req: Request, res: Response) {
    try {
      const truck = await TruckService.deleteTruck(req.params.id);
      if (!truck) {
        res.status(404).json({ message: 'Truck not found' });
      } else {
        res.json(truck);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new TruckController();
