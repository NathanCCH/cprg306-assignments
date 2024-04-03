"use client";

import { useRouter } from 'next/router';
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    try {
      const listItems = await getItems(user.uid);
      setItems(listItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  if (!user) {
    alert("You must be signed in to access this page.");
    return null;
  }



  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

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
    <main className="bg-cyan-950 flex">
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4 ">Shopping List</h1>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <div className="flex-1 pt-20 pr-20">
        <div>
            <MealIdeas ingredient={selectedMeal} />
        </div>
      </div>
    </main>
  )
}