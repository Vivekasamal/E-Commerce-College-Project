import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [menuState, setMenuState] = useState('menu');

  const onMenuToggle = () => {
    setMenuState(menuState === 'menu' ? 'close' : 'menu');
  };

  return (
    <header className="relative shadow-lg px-10 py-2">
      <nav className="flex justify-between">
        <div className="w-20 h-auto flex items-center">
          <img src="hi.png" alt="LOGO" />
        </div>
        <div className="flex items-center gap-3">
          <div className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] ${menuState === 'menu' ? 'left-[100%]' : 'left-[0%]'} px-5 md:py-0 py-5 `}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="/">Home</a></li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="/Wishlist">Wishlist</a></li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="/Cart">Cart</a></li>
              {/* <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="/Search">Search</a></li> */}

              <button className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            <Link to="/Search"><FaSearch size={20} /></Link>
          </button>
              {/* <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="#">About Us</a></li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="#">Contact us</a></li>*/}
            </ul>
          </div>
          <div className="flex items-center gap-2">
          {/* <button className="hover:bg-clip-text hover:text-gray-700 border-solid font-bold text-black px-5 py-2 rounded-full">
            <Link to="/Search"><IoMdSearch size={20} /></Link>
          </button> */}

            <button type="button" className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full " onClick={onMenuToggle}>
              <NavLink to="/logout">Logout</NavLink>
            </button>
            <button type="button" className="hover:bg-clip-text hover:text-gray-700 border-solid font-bold text-black px-5 py-2 rounded-full " onClick={onMenuToggle}>
              <NavLink to="/profile"><CgProfile size={40} /></NavLink>
            </button>
            <ion-icon name="menu" onClick={onMenuToggle} className="text-[30px] cursor-pointer md:hidden"></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
