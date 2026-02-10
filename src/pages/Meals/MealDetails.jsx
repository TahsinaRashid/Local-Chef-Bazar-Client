// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import useAuth from "../../hooks/useAuth";
// // // import Swal from "sweetalert2";


// // // const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/";



// // // export default function MealDetails() {

// // //   const { id } = useParams();

// // //   const { user } = useAuth();

// // //   const navigate = useNavigate();

// // //   const [meal, setMeal] = useState(null);

// // //   const [reviews, setReviews] = useState([]);

// // //   const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

// // //   const [loading, setLoading] = useState(true);



// // //   useEffect(() => {

// // //      if (!user) return navigate(`/login?redirect=/meals/${id}`);



// // //     const fetchMeal = async () => {

// // //       try {

// // //         const res = await fetch(`${API_URL}/meals/${id}/details`, {

// // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

// // //         });

// // //         const data = await res.json();

// // //         setMeal(data);

// // //         setReviews(data.reviews || []);

// // //       } catch (err) {

// // //         console.error(err);

// // //       } finally {

// // //         setLoading(false);

// // //       }

// // //     };

// // //     fetchMeal();

// // //   }, [id, user, navigate]);



// // //   const handleOrderNow = () => navigate(`/order/${id}`, { state: { meal } });



// // //   const handleFavorite = async () => {

// // //     try {

// // //       const res = await fetch(`${API_URL}/favorites`, {

// // //         method: "POST",

// // //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },

// // //         body: JSON.stringify({

// // //           _id: meal._id,

// // //           foodName: meal.foodName,

// // //           chefId: meal.chefId ? meal.chefId._id : null,

// // //           chefName: meal.chefId ? meal.chefId.name : 'Unknown',

// // //           price: meal.foodPrice,

// // //         }),

// // //       });

// // //       const data = await res.json();

// // //       Swal.fire(res.status === 201 ? "Success" : "Info", data.message, res.status === 201 ? "success" : "info");

// // //     } catch (err) {

// // //       console.error(err);

// // //       Swal.fire("Error", "Could not add to favorites", "error");

// // //     }

// // //   };



// // //   const handleSubmitReview = async () => {

// // //     if (!newReview.comment.trim()) return Swal.fire("Error", "Write a comment", "warning");

// // //     try {

// // //       const res = await fetch(`${API_URL}/reviews`, {

// // //         method: "POST",

// // //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },

// // //         body: JSON.stringify({ _id: meal._id, rating: newReview.rating, comment: newReview.comment }),

// // //       });

// // //       const data = await res.json();

// // //       if (res.status === 201) {

// // //         setReviews([data.review, ...reviews]);

// // //         setNewReview({ rating: 5, comment: "" });

// // //         Swal.fire("Success", data.message, "success");

// // //       } else Swal.fire("Error", data.message, "error");

// // //     } catch (err) {

// // //       console.error(err);

// // //       Swal.fire("Error", "Could not submit review", "error");

// // //     }

// // //   };



// // //   if (loading) return <p className="text-center mt-8">Loading...</p>;

// // //   if (!meal) return <p className="text-center mt-8">Meal not found</p>;



// // //   return (

// // //     <div className="max-w-5xl mx-auto px-4 py-8">

// // //       <div className="flex flex-col md:flex-row gap-6">

// // //         <img src={meal.foodImage} alt={meal.foodName} className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg" />

// // //         <div className="flex-1 flex flex-col gap-2">

// // //           <h2 className="text-3xl font-bold">{meal.foodName}</h2>

// // //           <p>Food: ${meal.foodName}</p>

// // //           <p>Price: ${meal.foodPrice}</p>

// // //           <p>Rating: {meal.foodRating}</p>

// // //           <p>Delivery Area: {meal.deliveryArea}</p>

// // //           <p>Estimated Delivery: {meal.estimatedDeliveryTime}</p>

// // //           <p>Chef Experience: {meal.chefId ? meal.chefId.experience : 'N/A'}</p>

// // //           <p>Chef ID: {meal.chefId ? meal.chefId._id : null}</p>



// // //           <div className="flex gap-3 mt-4">

// // //             <button onClick={handleOrderNow} className="bg-green-900 text-white px-4 py-2 rounded">Order Now</button>

// // //             <button onClick={handleFavorite} className="bg-yellow-500 text-white px-4 py-2 rounded">Add to Favorites</button>

// // //           </div>

// // //         </div>

// // //       </div>



// // //       <div className="mt-8">

// // //         <h3 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h3>

// // //         {reviews.length > 0 ? reviews.map((r) => (

// // //           <div key={r._id} className="border p-4 rounded-lg mb-2 flex gap-3">

// // //             <img src={r.reviewerImage} alt={r.reviewerName} className="w-12 h-12 rounded-full" />

// // //             <div>

// // //               <p className="font-semibold">{r.reviewerName}</p>

// // //               <p>Rating: {r.rating}</p>

// // //               <p>{r.comment}</p>

// // //               <p className="text-gray-500 text-sm">{new Date(r.date).toLocaleString()}</p>

// // //             </div>

// // //           </div>

// // //         )) : <p>No reviews yet.</p>}



// // //         <div className="mt-4">

// // //           <h4>Write a Review</h4>

// // //           <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })} className="border p-1 rounded mr-2">

// // //             {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}⭐</option>)}

// // //           </select>

// // //           <textarea value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} placeholder="Write your review..." className="border p-2 w-full mt-2" />

// // //           <button onClick={handleSubmitReview} className="bg-green-900 text-white px-4 py-2 mt-2 rounded">Give Review</button>

// // //         </div>

// // //       </div>

// // //     </div>

// // //   );

// // // }

// import React, { useEffect, useState } from "react";

// import { useNavigate, useParams } from "react-router";

// import useAuth from "../../hooks/useAuth";

// import Swal from "sweetalert2";



// const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";



// export default function MealDetails() {

//   const { id } = useParams();

//   const { user } = useAuth();

//   const navigate = useNavigate();

//   const [meal, setMeal] = useState(null);

//   const [reviews, setReviews] = useState([]);

//   const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

//   const [loading, setLoading] = useState(true);



//   useEffect(() => {

//     // if (!user) return navigate(`/login?redirect=/meals/${id}`);



//     const fetchMeal = async () => {

//       try {

//         const res = await fetch(`${API_URL}/meals/${id}/details`, {

//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

//         });

//         const data = await res.json();

//         setMeal(data);

//         setReviews(data.reviews || []);

//       } catch (err) {

//         console.error(err);

//       } finally {

//         setLoading(false);

//       }

//     };

//     fetchMeal();

//   }, [id, user, navigate]);



//   const handleOrderNow = () => navigate(`/order/${id}`, { state: { meal } });



//   const handleFavorite = async () => {

//     try {

//       const res = await fetch(`${API_URL}/favorites`, {

//         method: "POST",

//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },

//         body: JSON.stringify({

//           mealId: meal._id,

//           mealName: meal.foodName,

//           chefId: meal.chefId,

//           chefName: meal.chefName,

//           price: meal.price,

//         }),

//       });

//       const data = await res.json();

//       Swal.fire(res.status === 201 ? "Success" : "Info", data.message, res.status === 201 ? "success" : "info");

//     } catch (err) {

//       console.error(err);

//       Swal.fire("Error", "Could not add to favorites", "error");

//     }

//   };



//   const handleSubmitReview = async () => {

//     if (!newReview.comment.trim()) return Swal.fire("Error", "Write a comment", "warning");

//     try {

//       const res = await fetch(`${API_URL}/reviews`, {

//         method: "POST",

//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },

//         body: JSON.stringify({ foodId: meal._id, rating: newReview.rating, comment: newReview.comment }),

//       });

//       const data = await res.json();

//       if (res.status === 201) {

//         setReviews([data.review, ...reviews]);

//         setNewReview({ rating: 5, comment: "" });

//         Swal.fire("Success", data.message, "success");

//       } else Swal.fire("Error", data.message, "error");

//     } catch (err) {

//       console.error(err);

//       Swal.fire("Error", "Could not submit review", "error");

//     }

//   };



//   if (loading) return <p className="text-center mt-8">Loading...</p>;

//   if (!meal) return <p className="text-center mt-8">Meal not found</p>;



//   return (

//     <div className="max-w-5xl mx-auto px-4 py-8">

//       <div className="flex flex-col md:flex-row gap-6">

//         <img src={meal.foodImage} alt={meal.foodName} className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg" />

//         <div className="flex-1 flex flex-col gap-2">

//           <h2 className="text-3xl font-bold">{meal.foodName}</h2>

//           <p>Chef: {meal.chefName}</p>

//           <p>Price: {meal.foodPrice}</p>

//           <p>Rating: {meal.rating}</p>

//           <p>Delivery Area: {meal.deliveryArea}</p>

//           <p>Estimated Delivery: {meal.estimatedDeliveryTime}</p>

//           <p>Chef Experience: {meal.chefExperience}</p>

//           <p>Chef ID: {meal.chefId}</p>



//           <div className="flex gap-3 mt-4">

//             <button onClick={handleOrderNow} className="bg-green-900 text-white px-4 py-2 rounded">Order Now</button>

//             <button onClick={handleFavorite} className="bg-yellow-500 text-white px-4 py-2 rounded">Add to Favorites</button>

//           </div>

//         </div>

//       </div>



//       <div className="mt-8">

//         <h3 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h3>

//         {reviews.length > 0 ? reviews.map((r) => (

//           <div key={r._id} className="border p-4 rounded-lg mb-2 flex gap-3">

//             <img src={r.reviewerImage} alt={r.reviewerName} className="w-12 h-12 rounded-full" />

//             <div>

//               <p className="font-semibold">{r.reviewerName}</p>

//               <p>Rating: {r.rating}</p>

//               <p>{r.comment}</p>

//               <p className="text-gray-500 text-sm">{new Date(r.date).toLocaleString()}</p>

//             </div>

//           </div>

//         )) : <p>No reviews yet.</p>}



//         <div className="mt-4">

//           <h4>Write a Review</h4>

//           <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })} className="border p-1 rounded mr-2">

//             {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}⭐</option>)}

//           </select>

//           <textarea value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} placeholder="Write your review..." className="border p-2 w-full mt-2" />

//           <button onClick={handleSubmitReview} className="bg-green-900 text-white px-4 py-2 mt-2 rounded">Give Review</button>

//         </div>

//       </div>

//     </div>

//   );

// }


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default function MealDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // প্রাইভেট পেজ চেক: ইউজার না থাকলে লগইন এ পাঠিয়ে দিবে
    if (!user && !loading) return navigate("/login");

    const fetchMeal = async () => {
      try {
        const res = await fetch(`${API_URL}/meals/${id}/details`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        
        if (res.status === 401 || res.status === 403) {
            return navigate("/login");
        }

        const data = await res.json();
        setMeal(data);
        setReviews(data.reviews || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id, user, navigate, loading]);

  // Order Now বাটন লজিক: মেমোরিতে ডাটা পাঠিয়ে রিডাইরেক্ট করা
  const handleOrderNow = () => {
    navigate(`/order`, { state: { meal } });
  };

  // Favorite বাটন লজিক: রিকোয়ারমেন্ট অনুযায়ী ডাটা পাঠানো
  const handleFavorite = async () => {
    try {
      const res = await fetch(`${API_URL}/favorites`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
        body: JSON.stringify({
          userEmail: user?.email, // লগইন থাকা ইউজারের ইমেইল
          mealId: meal._id,       
          mealName: meal.foodName,
          chefId: meal.chefId,
          chefName: meal.chefName,
          price: meal.foodPrice, // সঠিক প্রোপার্টি পাঠানো
          addedTime: new Date().toISOString(), // বর্তমান সময়
        }),
      });
      
      const data = await res.json();
      
      if (res.status === 201) {
        Swal.fire("Success", "Meal added to favorites successfully!", "success");
      } else if (res.status === 409) {
        Swal.fire("Info", "This meal is already in your favorites", "info");
      } else {
        Swal.fire("Error", data.message || "Failed to add favorite", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Could not add to favorites", "error");
    }
  };

  const handleSubmitReview = async () => {
    if (!newReview.comment.trim()) return Swal.fire("Error", "Write a comment", "warning");
    try {
      const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
        body: JSON.stringify({ 
            foodId: meal._id, 
            rating: newReview.rating, 
            comment: newReview.comment 
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        setReviews([data.review, ...reviews]);
        setNewReview({ rating: 5, comment: "" });
        Swal.fire("Success", "Review submitted successfully!", "success");
      } else {
        Swal.fire("Error", data.message, "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Could not submit review", "error");
    }
  };

  if (loading) return <div className="text-center mt-20 loading loading-spinner loading-lg"></div>;
  if (!meal) return <p className="text-center mt-8 text-red-500 font-bold">Meal not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <img src={meal.foodImage || 'https://i.ibb.co/default-food.jpg'} alt={meal.foodName} className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md" />
        <div className="flex-1 space-y-3">
          <h2 className="text-4xl font-extrabold text-gray-800">{meal.foodName}</h2>
          <div className="flex gap-6 py-2">
            <p className="text-2xl font-bold text-green-700">Price: ${meal.foodPrice || meal.Price}</p>
            <p className="text-xl text-orange-500 font-semibold">Rating: {meal.foodRating || meal.rating}4.5⭐</p>
          </div>
          <div className="text-gray-600 space-y-1">
             <p><strong>Ingredients:</strong> {meal.ingredients?.join(', ') || 'Fresh ingredients'}</p>
             <p><strong>Delivery Area:</strong> {meal.deliveryArea?.join(', ') || 'Bangladesh'}</p>
             <p><strong>Est. Time:</strong> {meal.estimatedDeliveryTime || '30-45 minutes'}</p>
             <p><strong>Chef Experience:</strong> {meal.chefExperience || 'Experienced'}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={handleOrderNow} className="btn btn-success text-white px-8">Order Now</button>
            <button onClick={handleFavorite} className="btn btn-warning text-white">Add to Favorites</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-6">Reviews ({reviews.length})</h3>
        <div className="grid gap-4">
            {reviews.length > 0 ? reviews.map((r) => (
            <div key={r._id} className="bg-gray-50 p-4 rounded-xl border flex gap-4 items-start">
                <img src={r.reviewerImage || 'https://i.ibb.co/default-user.jpg'} alt="" className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                    <p className="font-bold text-lg">{r.reviewerName}</p>
                    <div className="flex text-yellow-500 text-sm">
                        {"⭐".repeat(r.rating)}
                    </div>
                    <p className="mt-1 text-gray-700">{r.comment}</p>
                    <p className="text-gray-400 text-xs mt-2">{new Date(r.date).toLocaleString()}</p>
                </div>
            </div>
            )) : <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>}
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border-2 border-dashed border-gray-200">
          <h4 className="text-xl font-bold mb-4">Give a Review</h4>
          <div className="flex items-center gap-2 mb-3">
             <span className="font-semibold">Rating:</span>
             <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })} className="select select-bordered select-sm">
                {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
             </select>
          </div>
          <textarea value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} placeholder="How was the food? Share your experience..." className="textarea textarea-bordered w-full h-24" />
          <button onClick={handleSubmitReview} className="btn btn-neutral mt-3">Submit Review</button>
        </div>
      </div>
    </div>
  );
}
