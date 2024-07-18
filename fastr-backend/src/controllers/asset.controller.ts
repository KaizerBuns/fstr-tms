import { Request, Response } from 'express';
import AssetService from '../services/asset.service';

class AssetController {
  async createAsset(req: Request, res: Response) {
    try {
      const asset = await AssetService.createAsset(req.body);
      res.status(201).json(asset);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAssets(req: Request, res: Response) {
    try {
      const asset = await AssetService.getAssets();
      if (!asset) {
        res.status(404).json({ message: 'Assets not found' });
      } else {
        res.json(asset);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAssetById(req: Request, res: Response) {
    try {
      const asset = await AssetService.getAssetById(req.params.id);
      if (!asset) {
        res.status(404).json({ message: 'Asset not found' });
      } else {
        res.json(asset);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateAsset(req: Request, res: Response) {
    try {
      const asset = await AssetService.updateAsset(req.params.id, req.body.data);
      if (!asset) {
        res.status(404).json({ message: 'Asset not found' });
      } else {
        res.json(asset);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAsset(req: Request, res: Response) {
    try {
      const asset = await AssetService.deleteAsset(req.params.id);
      if (!asset) {
        res.status(404).json({ message: 'Asset not found' });
      } else {
        res.json(asset);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new AssetController();
