import Asset from '../models/Asset';

class AssetService {
  async createAsset(assetData: any) {
    const asset = new Asset(assetData);
    return await asset.save();
  }

  async getAssets() {
    return Asset.find();
  }

  async getAssetById(id: string) {
    return Asset.findById(id);
  }

  async updateAsset(id: string, assetData: any) {
    return Asset.findByIdAndUpdate(id, assetData, { new: true });
  }

  async deleteAsset(id: string) {
    return Asset.findByIdAndDelete(id);
  }
}

export default new AssetService();
