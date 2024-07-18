import Trip from '../models/Trip';

class TripService {
  async createTrip(tripData: any) {
    const trip = new Trip(tripData);
    return await trip.save();
  }

  async getTrips() {
    return Trip.find();
  }

  async getTripById(id: string) {
    return Trip.findById(id);
  }

  async updateTrip(id: string, tripData: any) {
    return Trip.findByIdAndUpdate(id, tripData, { new: true });
  }

  async deleteTrip(id: string) {
    return Trip.findByIdAndDelete(id);
  }
}

export default new TripService();
