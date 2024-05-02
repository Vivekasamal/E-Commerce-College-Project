import React, { useState } from 'react';

function OrderPage() {
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = () => {
        const price = 99.99; // Price of the product
        const subtotal = price * quantity;
        setTotalAmount(totalAmount + subtotal);

        const newItem = `Product Name x ${quantity}`;
        setCartItems([...cartItems, { name: newItem, subtotal }]);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const checkout = () => {
        alert('Redirecting to checkout page...');
        // Add code to redirect to checkout page
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">Order Details</h1>
            <div className="flex flex-wrap">
                {/* Product Details */}
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white shadow-md rounded p-4">
                        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
                        <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-gray-700 mb-2">Price: $99.99</p>
                        <div className="flex items-center mb-4">
                            <label htmlFor="quantity" className="mr-2">Quantity:</label>
                            <input type="number" id="quantity" className="border rounded px-2 py-1" value={quantity} onChange={handleQuantityChange} />
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                {/* Order Summary */}
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white shadow-md rounded p-4">
                        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                        <div className="mb-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex justify-between items-center mb-2">
                                    <p>{item.name}</p>
                                    <p>${item.subtotal.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 font-semibold">Total: <span>${totalAmount.toFixed(2)}</span></p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4" onClick={checkout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
