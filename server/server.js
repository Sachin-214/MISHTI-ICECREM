import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Order from "./models/Order.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI || "";
const DB_NAME = process.env.MONGODB_DB || "mishti_icecream";

app.use(cors());
app.use(express.json({ limit: "2mb" }));

const validateOrderPayload = (body) => {
  if (!body) return "Missing request body.";
  const { name, phone, product } = body;
  if (!name || !phone) return "Missing name or phone.";
  if (!Array.isArray(product) || product.length === 0) return "Product list is required.";
  return null;
};

const normalizeOrder = (body) => {
  const items = body.product.map((p) => ({
    name: p.name,
    qty: Number(p.qty) || 0,
    price: Number(p.amount) || 0
  }));

  const grandTotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return {
    name: body.name,
    email: body.email || "",
    mobile: body.phone,
    shopName: body.shopName || "",
    address: body.address || "",
    items,
    grandTotal
  };
};

app.post(["/api/users", "/api/users/add"], async (req, res) => {
  try {
    const error = validateOrderPayload(req.body);
    if (error) return res.status(400).json({ success: false, message: error });

    const order = await Order.create(normalizeOrder(req.body));
    return res.status(201).json({ success: true, message: "Order Received!", orderId: order._id });
  } catch (err) {
    console.error("Order save failed", err);
    return res.status(500).json({ success: false, message: "Server error while saving order." });
  }
});

const start = async () => {
  if (!MONGO_URI) {
    console.error("Missing MONGO_URI environment variable");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI, { dbName: DB_NAME });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Mongo connection failed", err);
    process.exit(1);
  }
};

start();
