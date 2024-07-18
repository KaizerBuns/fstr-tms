import Truck from '../models/Truck';

class TruckService {
  async createTruck(truckData: any) {
    const truck = new Truck(truckData);
    return await truck.save();
  }

  async getTrucks() {
    return Truck.find();
  }

  async getTruckById(id: string) {
    return Truck.findById(id);
  }

  async updateTruck(id: string, truckData: any) {
    return Truck.findByIdAndUpdate(id, truckData, { new: true });
  }

  async deleteTruck(id: string) {
    return Truck.findByIdAndDelete(id);
  }
}

export default new TruckService();
