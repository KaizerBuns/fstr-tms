import BaseModel from "./baseModel";

class User extends BaseModel {
  constructor() {
    super("User");
  }

  authLogin(email, password) {
    let request = { email, password };
    return this.apiEndpoint.action("login", request);
  }
}

export default User;
