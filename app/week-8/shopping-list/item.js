

export default function Item({ name, quantity, category, onSelect}) {
    return (
        <div className="bg-cyan-800 mb-3 p-2.5 max-w-xs rounded-lg" onClick={onSelect}>
            <li>
                <h2 className="text-xl">{name}</h2>
                <p className="pl-2">Buy {quantity} in {category}</p>
            </li>
        </div>
    )
}