import User from "./user";

class BaseFactory {
  constructor(authToken) {
    this.authToken = authToken;

    //Setup BaseModels
    this.User = new User(authToken);
  }

  //Return the instance of the initiated class
  call(modelName) {
    return this[modelName];
  }
}

export default BaseFactory;
