"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Could not fetch meals: ", error);
      return [];
    }
  }

  const loadMealIdeas = async (ingredient) => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="bg-cyan-800 rounded-md p-3">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <div className="pb-3">
        {meals ? (
          <p>Here are some meal ideas using {ingredient}:</p>
        ) : (
          <p>No meal ideas found for {ingredient}</p>
        )}
      </div>
      {meals ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}