import ItemList from "./item-list";

export default function Page() {
  return (
    <main class="bg-cyan-950">
      <div class="p-10">
        <h1 class="text-2xl font-bold mb-4 ">Shopping List</h1>
        <ul>
          <ItemList />
        </ul>
      </div>
    </main>
  )
}