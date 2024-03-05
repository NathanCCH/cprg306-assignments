"use client";

import { useState } from "react";

export default function NetItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");



  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000);
    const item = {
      id: newId,
      name,
      quantity,
      category,
    };
    
    onAddItem(item);

    console.log(item);

    
    // Reset the form.
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form class="p-3 m-3 bg-slate-900 text-black rounded-md max-w-sm w-full">
      <input type="text" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} required class="w-full h-10 mb-3 pl-2 border-2 border-gray-400 rounded-lg focus:bg-yellow-100" />
      <div class="flex justify-between mb-3">
        <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required class="h-10 pl-2 w-2/5 border-2 border-gray-400 focus:bg-yellow-100 rounded-lg" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} class="ml-2 w-3/5 h-10 pl-2 border-2 border-gray-400 focus:bg-yellow-100 rounded-lg">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen_foods">Frozen Foods</option>
          <option value="canned_goods">Canned Goods</option>
          <option value="dry_goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button onClick={handleSubmit} className="w-full h-10 text-white bg-blue-400 hover:bg-blue-500 rounded-lg ">Submit</button>
    </form>
  );
}

