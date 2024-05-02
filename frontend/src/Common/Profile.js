import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { LuMapPin } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";

const Profile = () => {
  const [menuState, setMenuState] = useState('menu');

  const onMenuToggle = () => {
    setMenuState(menuState === 'menu' ? 'close' : 'menu');
  };
  
  return (
    <div className="container mx-auto px-4 md:w-[500px] mt-8">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <div className="flex flex-col items-center">
          <img src='hi.png' className='rounded-full h-[150px] w-[150px] mb-4' alt='profile'/>
          <label htmlFor="profile-photo" className="cursor-pointer text-purple-500 hover:text-[#2b68e0] mb-4">
            Update Profile Photo
            <input type="file" id="profile-photo" className="hidden" accept="image/*" />
          </label>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Vivek's Profile</h1>
        <p className="text-lg font-semibold mb-4 text-center text-gray-600">vivekanandasamal@gmail.com</p>
        <div className="grid grid-cols-1 gap-4">
          <button className="bg-purple-500 w-full hover:bg-[#2b68e0] text-white font-semibold py-2 px-4 rounded">
             <Link to="/profile"><CgProfile size={20} className="inline-block mr-2" />Edit Profile</Link>
          </button>
          <button className="bg-purple-500 w-full hover:bg-[#2b68e0] text-white font-semibold py-2 px-4 rounded">
            <Link to="/saved-addresses"><LuMapPin size={20} className="inline-block mr-2" />Saved Addresses</Link>
          </button>
          <button className="bg-purple-500 w-full hover:bg-[#2b68e0] text-white font-semibold py-2 px-4 rounded">
            <Link to="/saved-cards"><TfiWallet size={20} className="inline-block mr-2" />Saved Cards and Wallets</Link>
          </button>
          <button className="bg-purple-500 w-full hover:bg-[#2b68e0] text-white font-semibold py-2 px-4 rounded">
            <Link to="/wishlist"><IoIosHeartEmpty size={20} className="inline-block mr-2" />Wishlist</Link>
          </button>
          <button className="bg-purple-500 w-full hover:bg-[#2b68e0] text-white font-semibold py-2 px-4 rounded">
            <Link to="/order"><BsBoxSeam size={20} className="inline-block mr-2" />Orders</Link>
          </button>
        </div>
        <button type="button" className="mt-8 hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 w-full rounded-full" onClick={onMenuToggle}>
          <Link to="/logout">Logout</Link>
        </button>
        <ion-icon name="menu" onClick={onMenuToggle} className="text-[30px] cursor-pointer md:hidden"></ion-icon>
      </div>
    </div>
  );
};

export default Profile;
