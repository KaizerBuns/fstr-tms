import { Request, Response } from 'express';
import ViewService from '../services/view.service';

class ViewController {

  async getRoleViews(req: Request, res: Response) {
    try {
      const views = await ViewService.getRoleViews(req.params.role);
      if (!views) {
        res.status(404).json({ message: 'Views not found' });
      } else {
        res.json(views);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ViewController();
