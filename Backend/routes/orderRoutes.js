import express from 'express';
import mongoose from 'mongoose';
import Order from '../models/order.js'; // Make sure order model is .js and uses ES module too

const router = express.Router();

// POST /api/placeOrder
router.post('/placeOrder', async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, deliveryInfo } = req.body;

    const newOrder = new Order({
      items,
      totalAmount,
      paymentMethod,
      deliveryInfo,
      status: 'Ready to ship',
      createdAt: new Date()
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// GET /api/getOrders
router.get('/getOrders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to get orders' });
  }
});

export default router;
