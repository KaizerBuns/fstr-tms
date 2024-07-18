import Driver from '../models/Driver';

class DriverService {
  async createDriver(driverData: any) {
    console.log('driverData: ', driverData);
    const driver = new Driver(driverData);
    return await driver.save();
  }

  async getDrivers() {
    return Driver.find();
  }

  async getDriverById(id: string) {
    return Driver.findById(id);
  }

  async updateDriver(id: string, driverData: any) {
    return Driver.findByIdAndUpdate(id, driverData, { new: true });
  }

  async deleteDriver(id: string) {
    return Driver.findByIdAndDelete(id);
  }
}

export default new DriverService();
