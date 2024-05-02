import React from 'react'
import { Link } from 'react-router-dom'
import image from "../Assets/signup.jpg"

const SignUp = () => {
    return (
        <div class="min-h-screen flex items-center justify-center w-full" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover', // Set background size to cover
            backgroundRepeat: 'no-repeat', // Prevent background image from repeating
            backgroundPosition: 'center' // Center the background image
          }}>
            <div class="dark:bg-gray-900 opacity-80 shadow-md filter: blur-none rounded-lg px-8 py-6 w-[400px]">
                <div class="bg-white dark:bg-gray-900 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center text-white font-serif font-bold">Sign up</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] hover:text-white rounded-md">
                        Create Account
                    </button>
                </div>

                <div class="text-white mt-6">
                    Already have an account?
                    <Link to={"/login"} class="no-underline border-b border-blue text-white">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default SignUp
