import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import BrandLogos from './BrandLogos';
import stock from '../assets/stockphoto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         repeat: -1, // Infinite loop
    //         defaults: { ease: "linear" }
    //     });

    //     tl.fromTo(".brand-logos", { x: 0 }, {
    //         x: "-200%", // Move the entire width of the logo container
    //         duration: 35, // Duration of the scroll; adjust for speed
    //     });
    // }, []);
  
return (
<section className='w-full nav-height bg-white relative mb-10'>
    <div className='md:w-5/6 w-11/12 mx-auto flex flex-col p-6 md:p-12 bg-orange-50 mt-6 shadow-xl border border-cbrown rounded-lg'>

        <div className='mb-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl md:text-4xl font-bold'>Front-End Developer, Nespresso (Temp)</h1>
            
        </div>
            <img src={stock} alt="Stock Photo" className='mt-6 md:mt-10 mb-6 rounded-md drop-shadow-xl'/>
            <span className="font-semibold text-2xl">Join Nestlé Nordic – We are looking for the Power of You</span>
            <p clasName="text-gray-700 mb-3">
            Are you a Front-end developer that wants to continue your career within an FMCG company? Do you also want to work within e-commerce in a role where you cooperate with a wide range of stakeholders? Fantastic, then you might be our new colleague!
            </p>
        </div>
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Working at Nespresso</h2>
                <p className="text-gray-700">
                Your role as <strong>Front-End Developer</strong> is to manage the local implementation of market initiatives aiming to enhance the performance of the Nespresso responsive site in Sweden, Denmark, and Norway. These projects will be connected to the local E-commerce and Promotion roadmaps as well as daily operations. This includes working cross-functionally with Experience Designers, CRM and other teams. We enjoy a fast-paced environment and think individual sense of responsibility and empowerment is key.  As part of the eCommerce Operations team, you will report to the Nordic E-commerce Operations Manager in Stockholm and work alongside one other Front-End Developer in Stockholm. 
                </p>
        </div>

        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Job</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Advise the technical local development.</li>
                    <li>Ensure all Nespresso design and technical guidelines are followed and are in line with industry best practices (knowledge of responsive frameworks and designs).</li>
                    <li>Support validate the technical assessment of projects development from end-to-end, considering technical development, implementation, tracking and documentation.</li>
                    <li>Translate UI/UX design wireframes into actual code.</li>
                    <li>Drive development of A/B test and personalization use cases implementations. Collaborating with HQ when necessary to successfully launch tests with the objective of improving the customer site experience.</li>
                    <li>Identify unrealized opportunities / risks as part of all key roll-outs and launches.</li>
                </ul>
        </div>

        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">We are looking for the power of you</h2>
            <p className="text-gray-700">
            We believe that you are a strong collaborator and enjoy working in a team and with different stakeholders. You have excellent problem-solving skill combined with an analytical mindset. As a person, you are driving and make sure that tasks and projects are completed within deadline. Furthermore, you have a positive attitude and willingness to learn and grow.
            </p>
        </div>


        <div className="mb-4">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Qualifications</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>You have a relevant degree and 2+ years of experience in a similar role.</li>
    <li>Proficiency in HTML, CSS, and JavaScript.</li>
    <li>Ability to optimize UI/UX based on advanced analytics data preferred (i.e., Google Analytics, Glassbox).</li>
    <li>Knowledge of techniques and tools to optimize front-end code for performance.</li>
    <li>Previous experience with Figma or other interface design tool will be considered as a plus.</li>
    <li>Knowledge of content management systems (SAP Hybris preferred).</li>
    <li>Understanding how to interact with APIs.</li>    
    <li>You are Fluent in English. Any Scandinavian language is an advantage.</li>
  </ul>
</div>


<div className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Selection Process & Contact</h2>
  <p className="text-gray-700">
  We will interview suitable candidates as they apply, so please don’t hesitate to take this opportunity to submit your application and CV as soon as possible and by 19th of May at the latest. If you have any questions about the job, please contact our E-Commerce Operations Manager Nespresso, Lourens van Dijk on LinkedIn. Please note that we will only accept applications that are sent to us via our Careers site.
  </p>
</div>

<div className="mb-4">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Would you like to know more about us?</h2>
  <p className="text-gray-700">
  Follow us on LinkedIn if you would like to be notified of new Nestlé opportunities and our values. Follow us on Instagram if you want to know more about our company culture and see what it is like to work at Nestlé Nordics.
  </p>
</div>
<div className="mt-5 mb-4 flex flex-row font-medium text-sm md:text-base text-center md:text-left">
<span className="">Stockholm, SE</span>
<li class="text-gray-400 mx-2 list-none">|</li>
<span className="">Lysaker, NO </span>
<li class="text-gray-400 mx-2 list-none">|</li>
<span className="">Copenhagen, DK </span>
<div className="ml-2 justify-center items-center translate-y-0.2"><FontAwesomeIcon icon={faLocationDot}/></div>
</div>

<div className='flex justify-center items-center mx-auto w-5/6 m-10'>
    <button className="flex items-center justify-center flex-row h-14 w-48 md:w-auto bg-white text-gray-700 border-2  border-gray-700 text-sm font-medium py-3 px-4 rounded shadow hover:bg-gray-200 transition-colors duration-300">
       <a href='https://www.nestle.com/jobs'>Find More Jobs</a> 
    </button>
        
    <button className="flex items-center justify-center flex-row h-14 w-48 md:w-auto bg-blue-600 text-white border-2 border-gray-700 text-sm font-medium py-2 px-2 md:py-3 ml-6 md:px-5 rounded shadow hover:bg-blue-400 transition-colors duration-300">
        Apply Now
        <FontAwesomeIcon className="flex mx-2 items-center justify-center" icon={faArrowRightToBracket} />
    </button>
</div>

<div className="brand-container relative mx-auto">
    <BrandLogos/>
</div>


    </div>
</section>
  )
}

export default Hero