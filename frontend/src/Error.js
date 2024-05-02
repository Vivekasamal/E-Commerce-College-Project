import React from 'react';
import image from '../src/me.gif'; // Adjust the path to where your image is located

function Error() {
  return (
    <div className="text-center px-4 lg:px-0">
      <img src={image} alt="Page Not Found" className="mx-auto w-1/2 max-w-lg" />
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl md:text-3xl font-semibold">Page Not Found</p>
      <p className="mt-4">The page you're looking for doesn't seem to exist.</p>
      <a href="/" className="mt-6 inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-[#2b68e0] transition duration-300 ease-in-out">
          Go Home
      </a>
    </div>
  )
}

export default Error;
