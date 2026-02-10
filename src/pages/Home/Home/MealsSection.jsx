import React from 'react';

const meals = [
  {
    id: 1,
    name: "Grilled Chicken",
    description: "Juicy grilled chicken with herbs",
    price: 12.5,
    chef: "Chef John",
    image: "https://example.com/images/grilled-chicken.jpg"
  },
  {
    id: 2,
    name: "Vegan Salad",
    description: "Fresh vegetable salad with vinaigrette",
    price: 8,
    chef: "Chef Lisa",
    image: "https://example.com/images/vegan-salad.jpg"
  },
  {
    id: 3,
    name: "Beef Steak",
    description: "Tender beef steak with garlic butter",
    price: 15,
    chef: "Chef Mike",
    image: "https://example.com/images/beef-steak.jpg"
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    description: "Creamy alfredo pasta with mushrooms",
    price: 10,
    chef: "Chef Anna",
    image: "https://example.com/images/pasta-alfredo.jpg"
  },
  {
    id: 5,
    name: "Fish Curry",
    description: "Spicy fish curry with coconut milk",
    price: 13,
    chef: "Chef Ravi",
    image: "https://example.com/images/fish-curry.jpg"
  },
  {
    id: 6,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache",
    price: 6,
    chef: "Chef Sara",
    image: "https://example.com/images/chocolate-cake.jpg"
  }
];

export default function Meals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {meals.map(meal => (
        <div key={meal.id} className="border rounded p-4 shadow">
          <img src={meal.image} alt={meal.name} className="w-full h-40 object-cover rounded mb-2"/>
          <h2 className="font-bold text-lg">{meal.name}</h2>
          <p className="text-sm">{meal.description}</p>
          <p className="mt-1 font-semibold">${meal.price}</p>
          <p className="text-xs text-gray-500">By {meal.chef}</p>
        </div>
      ))}
    </div>
  );
}
