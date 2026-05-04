import Crypto from '../models/Crypto.js';

export const addCrypto = async (req, res) => {
  try {
    const crypto = await Crypto.create(req.body);
    res.status(201).json(crypto);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add crypto', error: error.message });
  }
};

export const getAllCryptos = async (req, res) => {
  const cryptos = await Crypto.find({});
  res.json(cryptos);
};

export const getTopGainers = async (req, res) => {
  // Sort by change24h in descending order (-1)
  const gainers = await Crypto.find({}).sort({ change24h: -1 }).limit(10);
  res.json(gainers);
};

export const getNewListings = async (req, res) => {
  // Sort by creation date in descending order (newest first)
  const newCryptos = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
  res.json(newCryptos);
};