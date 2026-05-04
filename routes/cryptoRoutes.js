import express from 'express';
import { addCrypto, getAllCryptos, getTopGainers, getNewListings } from '../controllers/cryptoController.js';

const router = express.Router();

router.post('/', addCrypto);
router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);

export default router;