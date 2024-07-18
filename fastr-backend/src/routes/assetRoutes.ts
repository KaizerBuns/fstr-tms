import express from 'express';
import AssetController from '../controllers/asset.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();

router.post('/', authenticate, AssetController.createAsset);

router.get('/', authenticate, AssetController.getAssets);

router.get('/:id', authenticate, AssetController.getAssetById);

router.put('/:id', authenticate,  AssetController.updateAsset);

router.delete('/:id', authenticate, AssetController.deleteAsset);

export default router;
