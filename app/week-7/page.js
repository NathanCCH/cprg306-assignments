"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanItem;
    if (item.name.includes(",")) {
      cleanItem = item.name.replace(/,.*/, "");
    } else {
      // Regular expression to match emojis
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanItem = item.name.replace(regexEmoji, "");
    }
    if (cleanItem) {
      setSelectedMeal(cleanItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  return (
    <main className="bg-cyan-950">
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4 ">Shopping List</h1>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <div className="inline-flex ">
        <div>
            <MealIdeas meal={selectedMeal} />
        </div>
      </div>
    </main>
  )
}