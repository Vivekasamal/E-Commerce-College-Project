import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import emptyWishlistImage from '../Assets/kitty.gif'; // Import your empty wishlist image

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (productName) => {
    setWishlist(prevWishlist => [...prevWishlist, productName]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={emptyWishlistImage} alt="Empty Wishlist" className="w-30 h-60 mb-4" />
          <p className="font-bold text-gray-600">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{item}</h2>
                <button onClick={() => setWishlist(prevWishlist => prevWishlist.filter((_, i) => i !== index))} className="text-red-500">
                  Remove
                </button>
              </div>
              {/* Additional item details can be added here */}
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-4 right-4">
        <button onClick={() => handleAddToWishlist('Product Name')} className=" bg-purple-500 hover:bg-blue-600 text-white px-4 py-2   rounded-full flex items-center">
          <FaHeart className="mr-2" /> Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
