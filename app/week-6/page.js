"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-cyan-950">
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4 ">Shopping List</h1>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </div>
      </div>
    </main>
  )
}