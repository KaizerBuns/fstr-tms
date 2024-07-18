import { Request, Response } from 'express';
import AccountService from '../services/account.service';

class AccountController {
  async createAccount(req: Request, res: Response) {
    try {
      const account = await AccountService.createAccount(req.body);
      res.status(201).json(account);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAccounts(req: Request, res: Response) {
    try {
      const account = await AccountService.getAccounts();
      if (!account) {
        res.status(404).json({ message: 'Accounts not found' });
      } else {
        res.json(account);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAccountById(req: Request, res: Response) {
    try {
      const account = await AccountService.getAccountById(req.params.id);
      if (!account) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json(account);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateAccount(req: Request, res: Response) {
    try {
      const account = await AccountService.updateAccount(req.params.id, req.body);
      if (!account) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json(account);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAccount(req: Request, res: Response) {
    try {
      const account = await AccountService.deleteAccount(req.params.id);
      if (!account) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json(account);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods as needed
}

export default new AccountController();
