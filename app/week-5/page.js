import ItemList from "./item-list";


export default function Page() {
  return (
    <main className="bg-cyan-950">
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4 ">Shopping List</h1>
        <div>
          <ItemList />
        </div>
      </div>
    </main>
  )
}