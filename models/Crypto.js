import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  change24h: { type: Number, required: true }, // e.g., 2.5 or -1.4
}, { timestamps: true });

export default mongoose.model('Crypto', cryptoSchema);