import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // <-- Import Framer Motion
import useAuth from '../../hooks/useAuth';

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Fetch meals
const fetchMeals = async (sortOrder) => {
  let url = `${API_URL}/meals`;
  if (sortOrder !== "none") {
    url += `?sort=price&order=${sortOrder}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching meals");

  return response.json();
};

// Meal Card with motion
const MealCard = ({ meal, isLoggedIn, navigate }) => {
  const handleSeeDetails = () => {
    if (isLoggedIn) {
      navigate(`/meals/${meal._id}`);
    } else {
      navigate(`/login?redirect=/meals/${meal._id}`);
    }
  };

  return (
    <motion.div
      className="bg-green-100 rounded-xl shadow-lg overflow-hidden border border-gray-200"
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={meal.foodImage}
          alt={meal.foodName}
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm shadow px-3 py-1 rounded-lg flex items-center gap-1">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="font-semibold">{meal.foodRating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{meal.foodName}</h3>
        <p className="text-gray-600 text-sm mt-1">
          👨‍🍳 <span className="font-medium">{meal.chefName}</span>
        </p>
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          📍 {meal.deliveryArea}
        </p>
        <p className="text-2xl font-bold text-green-600 mt-3">
          ${meal.foodPrice.toFixed(2)}
        </p>
        <button
          onClick={handleSeeDetails}
          className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 active:scale-95"
        >
          See Details
        </button>
      </div>
    </motion.div>
  );
};

// Meals Page with motion
const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth();
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    const loadMeals = async () => {
      try {
        setLoading(true);
        const data = await fetchMeals(sortOrder);
        setMeals(data);
      } catch {
        setError("Could not load meals.");
      } finally {
        setLoading(false);
      }
    };

    loadMeals();
  }, [sortOrder]);

  return (
    <div className=" mx-auto px-4 py-8 lg:px-10">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Daily Fresh Meals 🍽️
        </h2>
        <p className="text-gray-800 mt-2">
          Discover premium homemade dishes prepared by top home chefs.
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <select
          className="border text-gray-800 bg-green-100 shadow-sm rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Default Order</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading meals...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {meals.map((meal) => (
            <MealCard
              key={meal._id}
              meal={meal}
              isLoggedIn={isLoggedIn}
              navigate={navigate}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MealsPage;
