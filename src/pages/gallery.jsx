import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    }, []);
  
    return (
        <article id='moje-prace' className='w-full h-[100vh] md:mt-0 mt-10 lg:px-0 sm:px-10 px-2 bg-navbarBg'>
          <div className='lg:pl-[18%] pl-[0%] lg:pt-28 pt-16'>
            <h2 className='font-theSeasons font-bold lg:text-start text-center sm:text-5xl text-4xl tracking-widest mb-10'>Moje Prace</h2>
          </div>
        </article>
    );
  };
  
  export default Gallery;