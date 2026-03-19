import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, default: "" },
    mobile: { type: String, required: true },
    shopName: { type: String, default: "" },
    address: { type: String, default: "" },
    items: { type: [OrderItemSchema], required: true },
    grandTotal: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
