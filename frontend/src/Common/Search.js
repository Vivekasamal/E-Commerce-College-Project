import React, { useState } from 'react';

// Mock product data
const products = [
    { id:1, name: 'You deserve the world - Hooded Sweatshirt', price: 1000 },
    { id:2, name: 'Magic Toad - Hooded Sweatshirt', price: 1200 },
    { id: 3, name: 'Baddie Blossom - Hooded Sweatshirt', price: 900 },
    { id: 4, name: 'Patrick - Hooded Sweatshirt', price: 1100 },
    { id: 5, name: 'Stitch - Hooded Sweatshirt', price: 950},
    { id: 6, name: 'Salty - Hooded Sweatshirt', price: 1250 },
    { id: 7, name: 'Boys Slogan Graphic Ripped Tapered Jeans', price: 1250 },
    { id:8, name: 'Girls Butterfly Patched Straight Leg Jeans', price: 950 },
    { id:9, name: 'Solid Color Washed Jeans', price: 1100 },
    { id: 10, name: 'Women smile Jeans', price: 900 },
    { id: 11, name: 'Teen Girls Carton Jeans', price: 900 },
    { id: 12, name: 'Black Shaded jeans', price: 1000},
    









];

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Filter products based on search term
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
        // Perform search logic
        // Here you can send the search term to a backend API
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSearchSubmit} className="relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 h-full px-3 py-2 bg-purple-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Search
                </button>
            </form>
            <div className="mt-4">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map(product => (
                            <li key={product.id}>
                                {product.name} - ₹{product.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default Search;
