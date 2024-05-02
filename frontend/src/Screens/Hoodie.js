import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Simulated API call
const fetchProducts = async () => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // This would be replaced with an actual API call e.g., fetch('https://api.example.com/products')
  return [
    {
      id: 1,
      name: 'You deserve the world - Hooded Sweatshirt',
      price: 1000,
      image: 'https://www.thebtclub.com/cdn/shop/files/you-deserve-the-world-front_500x.jpg?v=1705916975',
    },
    {
      id: 2,
      name: 'Magic Toad - Hooded Sweatshirt',
      price: 1200,
      image: 'https://www.thebtclub.com/cdn/shop/products/magic-toad-hooded-sweatshirt-460384_500x.jpg?v=1638973775',
    },
    {
      id: 3,
      name: 'Baddie Blossom - Hooded Sweatshirt',
      price: 900,
      image: 'https://www.thebtclub.com/cdn/shop/products/baddie-blossom-hooded-sweatshirt-594043_500x.jpg?v=1635253294',
    },
    {
      id: 4,
      name: 'Patrick - Hooded Sweatshirt',
      price: 1100,
      image: 'https://www.thebtclub.com/cdn/shop/files/patrick_500x.jpg?v=1702114750',
    },
    {
      id: 5,
      name: 'Stitch - Hooded Sweatshirt',
      price: 950,
      image: 'https://www.thebtclub.com/cdn/shop/products/stitch-hooded-sweatshirt-922258_500x.jpg?v=1640964199',
    },
    {
      id: 6,
      name: 'Salty - Hooded Sweatshirt',
      price: 1250,
      image: 'https://www.thebtclub.com/cdn/shop/products/salty-hooded-sweatshirt-955605_500x.jpg?v=1632819636',
    },
  ];
};

function Hoodie() {
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
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Hoodie's 😍</h1>
        <Link to="/" className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 3a1 1 0 0 1 1.707-.707l8 8a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 9 19V17a1 1 0 1 0-2 0v2a1 1 0 0 1-.293.707l-8-8a1 1 0 0 1 0-1.414l8-8A1 1 0 0 1 9 3z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:scale-105">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">₹{product.price}</p>
              <img src={product.image} alt={product.name} className="w-50 h-50 object-cover mt-3" />
              <div className="mt-4 flex justify-between items-center">
                <button onClick={() => addToCart(product)} className=" bg-purple-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
          </div>
          </div>

<div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Price: ₹{item.price}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default Hoodie;
