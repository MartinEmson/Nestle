import React from 'react'
import nestle from '../assets/Nestle.png'

const Navbar = () => {
  return (
    <header className='bg-white pt-5 md:p-5 mb-5'>
        <nav className='container flex justify-between items-center mx-auto px-0 md:px-6'>
            <img src={nestle} alt="logo" className='h-24'/>
            <div className="flex gap-6 mr-5">
                <a href="#" class="hover:text-gray-500">View Profile</a>
                <a href="#" class="hover:text-gray-500">Employee Login</a>
            </div>

        </nav>
    </header>
    )
}

export default Navbar