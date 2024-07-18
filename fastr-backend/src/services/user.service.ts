import User from '../models/User';
import bcrypt from "bcrypt";

class UserService {
  async createUser(userDetails: any) {

    const {username, password} = userDetails;

    // const hashedPassword = await bcrypt.hash(password, 10);

    const user: any = await User.create({username, password: password});

    return {id: user.id, username: user.username};
  }

  async getUserByUsername(username: string) {
    return User.findOne({username});
  }

  async getUserById(id: string) {
    return await User.findById(id);
  }

  // Add other service methods as needed
}

export default new UserService();
