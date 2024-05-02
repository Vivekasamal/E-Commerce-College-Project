import React from 'react'
import { Link } from 'react-router-dom'
import image from "../Assets/logout-image.jpg"

function Logout() {
  return (
    <div class="min-h-screen flex items-center  justify-center  w-full" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover', // Set background size to cover
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center' // Center the background image
    }}>
      
      <div class="dark:bg-gray-900 opacity-80 shadow-md filter: blur-none rounded-lg px-8 py-6 w-[400px]">
        <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">LOGGED OUT SUCCESSFULLY!</h1>
        <div className='flex items-center justify-center text-white pt-10 pb-14 text-3xl font-bold font-mono'>
          <p>NOT DONE YET?</p>
        </div>
        <button type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid  border-[#5356e3] hover:text-white"><Link to="/login">GO BACK TO LOGIN</Link></button>
      </div>
   </div>
  )
}

export default Logout