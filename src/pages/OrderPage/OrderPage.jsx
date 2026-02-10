import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function OrderPage() {
  const { state } = useLocation(); // MealDetails থেকে পাঠানো ডাটা
  const { user } = useAuth();
  const navigate = useNavigate();
  const meal = state?.meal;

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  if (!meal) return <p className="text-center mt-10">No meal selected!</p>;

  // টোটাল প্রাইস ক্যালকুলেশন
  const totalPrice = (meal.foodPrice || meal.price) * quantity;

  const handleConfirmOrder = async (e) => {
    e.preventDefault();

    if (!address.trim()) return Swal.fire("Error", "Please enter your address", "warning");

    // কনফার্মেশন পপআপ
    Swal.fire({
      title: "Confirm Order?",
      text: `Your total price is $${totalPrice}. Do you want to confirm?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const orderData = {
            foodId: meal._id,
            mealName: meal.foodName,
            price: meal.foodPrice || meal.price,
            quantity: Number(quantity),
            chefId: meal.chefId,
            userEmail: user?.email,
            userAddress: address,
            paymentStatus: "Pending",
            orderStatus: "pending",
            orderTime: new Date().toISOString(),
          };

          const res = await fetch(`http://localhost:5000/api/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(orderData),
          });

          if (res.ok) {
            Swal.fire("Success", "Order placed successfully!", "success");
            navigate("/my-orders"); // অর্ডার শেষে ইউজারকে যেখানে পাঠাতে চান
          }
        } catch (err) {
          Swal.fire("Error", "Failed to place order", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>
      <form onSubmit={handleConfirmOrder} className="space-y-4">
        <div>
          <label className="label font-bold">Meal Name</label>
          <input type="text" value={meal.foodName} readOnly className="input input-bordered w-full bg-gray-100" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-bold">Price (Per Unit)</label>
            <input type="text" value={`$${meal.foodPrice || meal.price}`} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>
          <div>
            <label className="label font-bold">Chef ID</label>
            <input type="text" value={meal.chefId} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>
        </div>

        <div>
          <label className="label font-bold">Your Email</label>
          <input type="text" value={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />
        </div>

        <div>
          <label className="label font-bold text-primary">Quantity</label>
          <input 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            className="input input-bordered w-full border-primary" 
          />
        </div>

        <div>
          <label className="label font-bold text-primary">Delivery Address</label>
          <textarea 
            required
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Enter your full address" 
            className="textarea textarea-bordered w-full border-primary h-24"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xl font-bold text-center">Total Price: <span className="text-green-600">${totalPrice}</span></p>
        </div>

        <button type="submit" className="btn btn-primary w-full text-lg mt-4">Confirm Order</button>
      </form>
    </div>
  );
}