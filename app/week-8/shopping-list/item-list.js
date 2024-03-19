"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } 
    else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <>
      <div className="inline-block space-x-5 mb-3">
        <lable for="sort" class="text-m">Sort by: </lable>
        <button onClick={() => setSortBy("name")} className={` ${sortBy === "name" ? 'bg-teal-500' : 'bg-teal-900'} rounded-md p-1 w-24`} >Name</button>
        <button onClick={() => setSortBy("category")} className={` ${sortBy === "category" ? 'bg-teal-500' : 'bg-teal-900'} rounded-md p-1 w-24`}>Category</button>
      </div>
      <ul>
        {sortedItems.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}/>
        ))}
      </ul>
    </>
  )
}