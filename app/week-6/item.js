

export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-cyan-800 mb-3 p-2.5 max-w-xs rounded-lg">
            <h2 className="text-xl">{name}</h2>
            <p className="pl-2">Buy {quantity} in {category}</p>
        </li>
    )
}