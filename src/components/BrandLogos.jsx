import nespresso from '../assets/Nespresso.png'
import nestle from '../assets/Nestle.png'
import purina from '../assets/Purina.png';
import nestleh from '../assets/NestleH.png'
import cpw from '../assets/cpw.png'
import purinalogo from '../assets/purina-logo.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';

// Define your logos array
const logos = [
    { src: nestle, alt: 'Brand 1', className: '' },
    { src: nespresso, alt: 'Brand 2', className: '' },
    { src: purinalogo, alt: 'Brand 3', className: '' },
    { src: nestleh, alt: 'Brand 4', className: '-translate-y-2.5' },
    { src: cpw, alt: 'Brand 5', className: '-translate-y-2.5' }
];

const BrandLogos = () => {
    // Double the array for seamless looping
    const doubledLogos = [...logos, ...logos, ...logos];

    return (
        <div className="brand-logos flex justify-center gap-7">
            {doubledLogos.map((logo, index) => (
                <div key={index} className={`brand-logo ${logo.className}`}>
                   <a href=''><img src={logo.src} alt={logo.alt}/></a> 
                </div>
            ))}
        </div>
    );
};

export default BrandLogos;
