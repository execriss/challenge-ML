import { Router } from 'express';
import { getItemsByQuery, getItemById } from '../controllers/ItemController.js';
import { check } from 'express-validator';
import { validationMiddleware } from '../../middlewares/ValidationMiddleware.js';

const router = Router();

const validateItemId = [
  check('id').not().isEmpty().withMessage('Parameter :id cannot be empty').bail(),
  validationMiddleware
];

const validateQueryParam = [
  check('q').not().isEmpty().withMessage('Parameter :q cannot be empty').bail(),
  validationMiddleware
];

router.get('/items', validateQueryParam, getItemsByQuery);
router.get('/items/:id', validateItemId, getItemById);

export default router;
