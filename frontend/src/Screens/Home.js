import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from "../Assets/hi.avif";
import slide2 from "../Assets/ok.avif";
import slide3 from "../Assets/by.avif";
import cardImage1 from "../Assets/11.jpg";
import cardImage2 from "../Assets/22.jpg";
import cardImage3 from "../Assets/33.jpg";
import cardImage4 from "../Assets/44.jpg";
import cardImage5 from "../Assets/55.jpg";
import cardImage6 from "../Assets/66.jpg";
import seasonal1 from "../Assets/ss1.jpg";
import seasonal2 from "../Assets/ss2.jpg";
import seasonal3 from "../Assets/ss3.jpg";
import hii1 from "../Assets/hii1.jpg";
import hii2 from "../Assets/hii2.webp";
import hii3 from "../Assets/hii3.jpg";
import hii4 from "../Assets/hii4.webp";

import cate1 from "../Assets/10.jpg";
import cate2 from "../Assets/20.jpg";
import cate3 from "../Assets/30.jpg";



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const [activeSection, setActiveSection] = useState('newDrops');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [slide1, slide2, slide3];

  const newDrops = [
    { name: 'Baby Outfit', img: cardImage1, link: '/Newdrops' },
    { name: 'Womens Short Kurti', img: cardImage2, link: '/Newdrops' },
    { name: ' Men Striped Button Front Shirt', img: cardImage3, link: '/Newdrops' },
  ];

  const mostTrending = [
    { name: 'Baby Boy Patched Pocket Shirt & Shorts', img: cardImage4, link: '//Mosttrending' },
    { name: 'Tiered Dress For Womens', img: cardImage5, link: '/Mosttrending' },
    { name: 'Men Plaid Flap Pocket High Low Jacket', img: cardImage6, link: '/Mosttrending' },
  ];

  const seasonalFavs = [
    { name: 'CARGO', img: seasonal1, link: '/Season' },
    { name: 'OVERSIZED', img: seasonal2, link: '/Season' },
    { name: 'ESSENTIALS', img: seasonal3, link: '/Season' },
  ];

  const hii = [
    { name: 'Shirts🤩', img: hii1, link: '/Shirt' },
    { name: 'T-Shirts😘', img: hii2, link: '/Tshirt' },
    { name: 'Jeans😎', img: hii3, link: '/Jean' },
    { name: 'Hoodies😍', img: hii4, link: '/Hoodie' },
  ];

  const cate = [
    { name: 'Mens👦', img: cate1, link: '/Mens' },
    { name: 'Womens👧', img: cate2, link: '/Womens' },
    { name: 'Kids👶', img: cate3, link: '/Kids' },
 
  ];

  return (
    <div className="Home">
      {/* Slideshow Section */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg md:h-120">
        {slides.map((slide, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}>
            <img src={slide} className="absolute w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-purple-500' : 'bg-white'}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Section Buttons */}
      <div className="flex justify-center mt-8">
        <button onClick={() => setActiveSection('newDrops')} className={`px-4 py-2 rounded-l-lg ${activeSection === 'newDrops' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out transform hover:scale-105`}>New Drops</button>
        <button onClick={() => setActiveSection('mostTrending')} className={`px-4 py-2 rounded-r-lg ${activeSection === 'mostTrending' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out transform hover:scale-105`}>Most Trending</button>
      </div>

      {/* Product Cards based on Active Section */}
      <div className="flex justify-center mt-8 space-x-4 text-center">
        {(activeSection === 'newDrops' ? newDrops : mostTrending).map((product, index) => (
          <Link to={product.link} key={index} className="max-w-sm rounded overflow-hidden shadow-lg no-underline text-black hover:scale-105">
            <img src={product.img} alt={`${product.name}`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Seasonal Favs Section */}
      <div className="mt-12 text-center ">
        <h2 className="text-2xl font-bold mb-6">Seasonal Fav's 🌤️</h2>
        <div className="flex justify-center mt-4 space-x-4 ">
          {seasonalFavs.map((product, index) => (
            <Link to={product.link} key={index} className="max-w-sm rounded overflow-hidden  shadow-lg no-underline text-black hover:scale-105">
              <img src={product.img} alt={`${product.name}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <Link to='/Season' className="px-6 py-2 rounded-lg bg-purple-500 text-white mt-8 transition duration-300 ease-in-out transform hover:scale-105">View All</Link>
      </div>





      {/* Buttons for Shirts, T-Shirts, and Hoodies */}
      <div className="flex justify-center mt-8 space-x-4">
        <Link to="/Shirt" className="px-6 py-2 rounded-lg bg-purple-500 text-white  transition duration-300 ease-in-out transform hover:scale-105">Shirts</Link>
        <Link to="/Tshirt" className="px-6 py-2 rounded-lg bg-purple-500 text-white transition duration-300 ease-in-out transform hover:scale-105">T-Shirts</Link>
        <Link to="/Jean" className="px-6 py-2 rounded-lg bg-purple-500 text-white transition duration-300 ease-in-out transform hover:scale-105">Jeans</Link>
        <Link to="/Hoodie" className="px-6 py-2 rounded-lg bg-purple-500 text-white transition duration-300 ease-in-out transform hover:scale-105">Hoodies</Link>
      </div>

      
      <div className="mt-12 text-center   ">
        <div className="flex justify-center mt-4 space-x-4 h-50 ">
          {hii.map((product, index) => (
            <Link to={product.link} key={index} className=" w-40  rounded overflow-hidden  shadow-lg no-underline text-black hover:scale-105">
              <img src={product.img} alt={`${product.name}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
              </div>
            </Link>
          ))}
        
      </div>
    </div>
    




    <div className="mt-12 text-center ">
        <h2 className="text-2xl font-bold mb-6">Category 😯</h2>
        <div className="flex justify-center mt-4 space-x-4 ">
          {cate.map((product, index) => (
            <Link to={product.link} key={index} className="max-w-sm rounded overflow-hidden  shadow-lg no-underline text-black hover:scale-105">
              <img src={product.img} alt={`${product.name}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        <div>
          <br></br>
       <center>Thank You For Visiting Our Website❤️</center> 
       <br></br>
        </div>
    </div>
  );
}

export default Home;
