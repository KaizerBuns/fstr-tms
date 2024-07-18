import { Request, Response } from 'express';
import TrailerService from '../services/trailer.service';

class TrailerController {
  async createTrailer(req: Request, res: Response) {
    try {
      const trailer = await TrailerService.createTrailer(req.body);
      res.status(201).json(trailer);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTrailers(req: Request, res: Response) {
    try {
      const trailer = await TrailerService.getTrailers();
      if (!trailer) {
        res.status(404).json({ message: 'Trailers not found' });
      } else {
        res.json(trailer);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTrailerById(req: Request, res: Response) {
    try {
      const trailer = await TrailerService.getTrailerById(req.params.id);
      if (!trailer) {
        res.status(404).json({ message: 'Trailer not found' });
      } else {
        res.json(trailer);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTrailer(req: Request, res: Response) {
    try {
      const trailer = await TrailerService.updateTrailer(req.params.id, req.body);
      if (!trailer) {
        res.status(404).json({ message: 'Trailer not found' });
      } else {
        res.json(trailer);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteTrailer(req: Request, res: Response) {
    try {
      const trailer = await TrailerService.deleteTrailer(req.params.id);
      if (!trailer) {
        res.status(404).json({ message: 'Trailer not found' });
      } else {
        res.json(trailer);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new TrailerController();
