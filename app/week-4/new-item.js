"use client";

import { useState } from "react";

export default function NetItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    }

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form>
      <input type="text" placeholder="Item name" value={name} onchange={setName} required />
      <input type="number" min="1" max="99" value={quantity} onchange={setQuantity} required />
      <select onchange={setCategory}>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen_foods">Frozen Foods</option>
        <option value="canned_goods">Canned Goods</option>
        <option value="dry_goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacksoduce">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

