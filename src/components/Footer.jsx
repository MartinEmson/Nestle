import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-white text-black p-10 mb-5'>
    <ul className='flex flex-col md:flex-row items-center justify-center md:space-x-3 md:mr-3 text-lg space-y-3 md:space-y-0'>
        <li><a href="#" className='hover:text-gray-400'>Search Jobs</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>
        <li><a href="#" className='hover:text-gray-400'>Careers</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>        
        <li><a href="#" className='hover:text-gray-400'>Sign Up</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>
        <li><a href="#" className='hover:text-gray-400'>Contact Us</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>
        <li><a href="#" className='hover:text-gray-400'>Terms Of Service</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>
        <li><a href="#" className='hover:text-gray-400'>Privacy Policy</a></li>
        <li className="text-gray-400 md:flex hidden">|</li>
        <li><a href="#" className='hover:text-gray-400'>Cookies</a></li>
    </ul>
    <div className='text-center mt-10'>
        <p>
            © 2023 Nestlé | We unlock the power of food to enhance quality of life for everyone, today and for generations to come
        </p>
    </div>
</footer>


  )
}

export default Footer