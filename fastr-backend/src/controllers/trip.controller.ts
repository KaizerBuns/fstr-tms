import { Request, Response } from 'express';
import TripService from '../services/trip.service';

class TripController {
  async createTrip(req: Request, res: Response) {
    try {
      const trip = await TripService.createTrip(req.body);
      res.status(201).json(trip);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTrips(req: Request, res: Response) {
    try {
      const trip = await TripService.getTrips();
      if (!trip) {
        res.status(404).json({ message: 'Trips not found' });
      } else {
        res.json(trip);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTripById(req: Request, res: Response) {
    try {
      const trip = await TripService.getTripById(req.params.id);
      if (!trip) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        res.json(trip);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTrip(req: Request, res: Response) {
    try {
      const trip = await TripService.updateTrip(req.params.id, req.body.data);
      if (!trip) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        res.json(trip);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteTrip(req: Request, res: Response) {
    try {
      const trip = await TripService.deleteTrip(req.params.id);
      if (!trip) {
        res.status(404).json({ message: 'Trip not found' });
      } else {
        res.json(trip);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new TripController();
