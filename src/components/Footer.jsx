import React from 'react'

const Footer = () => {
  return (
    <div class='flex flex-col justify-center items-center bg-white text-black p-10 mb-10'>
    <ul class='flex items-center space-x-2'>
        <li><a href="#" class='hover:text-gray-400'>Search Jobs</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Careers</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Sign Up</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Contact Us</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Terms Of Service</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Privacy Policy</a></li>
        <li class="text-gray-400">|</li>
        <li><a href="#" class='hover:text-gray-400'>Cookies</a></li>
    </ul>
    <div class='text-center mt-10'>
        <p>
            © 2023 Nestlé | We unlock the power of food to enhance quality of life for everyone, today and for generations to come
        </p>
    </div>
</div>


  )
}

export default Footer