import Trailer from '../models/Trailer';

class TrailerService {
  async createTrailer(trailerData: any) {
    const trailer = new Trailer(trailerData);
    return await trailer.save();
  }

  async getTrailers() {
    return Trailer.find();
  }

  async getTrailerById(id: string) {
    return Trailer.findById(id);
  }

  async updateTrailer(id: string, trailerData: any) {
    return Trailer.findByIdAndUpdate(id, trailerData, { new: true });
  }

  async deleteTrailer(id: string) {
    return Trailer.findByIdAndDelete(id);
  }
}

export default new TrailerService();
