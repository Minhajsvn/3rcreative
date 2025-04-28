import { useState } from 'react';

export default function QuantityButton() {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="flex items-center space-x-4 bg-gray-200 rounded-full px-2">
            <button
                onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}
                className="w-12 h-12 text-3xl flex items-center justify-center cursor-pointer"
            >
                -
            </button>

            <span className="text-lg">{quantity}</span>

            <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-12 h-12 text-3xl flex items-center justify-center cursor-pointer"
            >
                +
            </button>
        </div>
    );
}
