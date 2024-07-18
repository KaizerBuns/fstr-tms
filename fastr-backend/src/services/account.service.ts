import Account from '../models/Account';

class AccountService {
  async createAccount(accountData: any) {
    const account = new Account(accountData);
    return await account.save();
  }

  async getAccounts() {
    return Account.find();
  }

  async getAccountById(id: string) {
    return Account.findById(id);
  }

  async updateAccount(id: string, accountData: any) {
    return Account.findByIdAndUpdate(id, accountData, { new: true });
  }

  async deleteAccount(id: string) {
    return Account.findByIdAndDelete(id);
  }
}

export default new AccountService();
