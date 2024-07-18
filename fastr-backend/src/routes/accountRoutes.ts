import express from 'express';
import AccountController from '../controllers/account.controller';
import authenticate from "../middleware/authMiddleware";

const router = express.Router();

router.post('/', AccountController.createAccount);

router.get('/', AccountController.getAccounts);

router.get('/:id', authenticate, AccountController.getAccountById);

router.put('/:id',  AccountController.updateAccount);

router.delete('/:id', authenticate, AccountController.deleteAccount);

export default router;
