import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  change24h: { type: Number, required: true }, // e.g., 2.5 or -1.4
  marketCap: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Crypto', cryptoSchema);