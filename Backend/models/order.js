import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      _id: String,
      name: String,
      image: String,
      price: Number,
      size: String,
      quantity: Number
    }
  ],
  totalAmount: Number,
  paymentMethod: String,
  deliveryInfo: {
    firstName: String,
    lastName: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
