

export default function Item({ name, quantity, category }) {
    return (
        <li class="bg-cyan-800 mb-2 p-2.5 max-w-xs rounded-lg">
            <h2 class="text-xl">{name}</h2>
            <p class="pl-2">Buy {quantity} in {category}</p>
        </li>
    )
}