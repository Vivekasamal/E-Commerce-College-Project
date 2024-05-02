import React, { useState, useEffect } from 'react';
import emptyCartImage from '../Assets/Add to Cart.gif'; // Import the empty cart image

// Simulated API call
const fetchProducts = async () => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a generic list of products
  return [
    // Example products removed
  ];
};

function Cart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsFromAPI = await fetchProducts();
      setProducts(productsFromAPI);
    };

    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === productId);
      if (isProductInCart && isProductInCart.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const placeOrder = () => {
    // Simulate placing the order by resetting the cart
    setCart([]);
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        <button onClick={placeOrder} disabled={cart.length === 0} className={`bg-purple-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${cart.length === 0 && 'opacity-50 cursor-not-allowed'}`}>Place Order</button>
      </div>

      <div className="mt-8">
        {cart.length === 0 ? (
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <img src={emptyCartImage} alt="Empty Cart" className="w-30 h-60 mr-4" />
            <p className="font-bold text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Cart Items</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center">
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <div className="flex space-x-2">
                      <button onClick={() => addToCart(item)} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">-</button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-xl font-semibold">₹{calculateTotal()}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">₹{product.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <button onClick={() => addToCart(product)} className=" bg-purple-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
