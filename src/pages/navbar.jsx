import React, { useState, useEffect } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import MainPic from '../img/mainPic.jpg';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const {ref, inView} = useInView({
        threshold: 0.2,
    });
    const animationPic = useAnimation();
    const animationText = useAnimation();
  
    useEffect(() => {
        if(inView) {
            animationPic.start({
              y: 0,
              transition: {
                type: 'tween',
                duration: 1,
              }
            });
            animationText.start({
                opacity: 1,
                transition: {
                  type: 'tween',
                  duration: 1,
                }
            });
        } if(!inView) {
            animationPic.start({
              y: '-100vh',
              transition: {
                type: 'tween',
                duration: 1,
              }
            });
            animationText.start({
                opacity: 0,
            });
        }
    }, [inView]);
  
    return (
      <header ref={ref} className='w-[100%] lg:h-[250px] md:h-[250px] h-[80px] bg-navbarBg flex md:py-0 py-1 md:relative fixed z-50'>
        <motion.section animate={animationPic} className='w-[60%] justify-center items-start lg:flex hidden'>
            <img src={MainPic} alt="Mauve Main Navbar" className='w-[270px] h-auto border-b border-[#000] pb-14 drop-shadow-2xl'/>
        </motion.section>
        <section className='w-full flex flex-wrap justify-center md:items-start items-center md:mt-10 mt-0'>
            <nav className='lg:w-full w-[90%] flex items-center justify-between lg:mr-[12%] mr-0 md:border-b border-b-0 border-[#000] pb-1'>
                <h1 className='font-maghony sm:text-4xl text-2xl tracking-widest uppercase'><a href="/mauve-beauty">Mauve</a></h1>
                <ul className='md:flex hidden items-center gap-10 uppercase font-klein font-bold text-lg tracking-widest'>
                    <li className='hover:text-hoverColor duration-100 cursor-pointer'><Link to='o-mnie' smooth='true' duration={100}>o mnie</Link></li>
                    <li className='hover:text-hoverColor duration-100 cursor-pointer'><Link to='oferta' smooth='true' duration={100}>oferta</Link></li>
                    <li className='hover:text-hoverColor duration-100 cursor-pointer'><Link to='moje-prace' smooth='true' duration={100}>moje prace</Link></li>
                </ul>
                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 text-xl'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile menu */}
                <ul
                    className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-[79px] left-0 w-full h-auto bg-navbarBg flex flex-col justify-center items-center font-klein uppercase'
                    }
                >
                    <li className='py-6 sm:text-2xl text-xl w-full text-center hover:bg-[#33333355]'>
                        <Link to='o-mnie' smooth='true' duration={100} className='inline-block w-full hover:text-hoverColor' onClick={handleClick}>o mnie</Link>
                    </li>
                    <li className='py-6 sm:text-2xl text-xl w-full text-center hover:bg-[#33333355]'>
                        <Link to='oferta' smooth='true' duration={100} className='inline-block w-full hover:text-hoverColor' onClick={handleClick}>oferta</Link>
                    </li>
                    <li className='py-6 sm:text-2xl text-xl w-full text-center hover:bg-[#33333355]'>
                        <Link to='moje-prace' smooth='true' duration={100} className='inline-block w-full hover:text-hoverColor' onClick={handleClick}>moje prace</Link>
                    </li>
                    <li className='py-6 sm:text-2xl text-xl'>
                        <a href="https://www.facebook.com/mauvebeautypl" className='bg-mainColor hover:bg-hoverColor px-10 py-4 font-klein uppercase tracking-widest text-lg text-[#ece5df] hover:scale-105 duration-300'>Umów się</a>
                    </li>
                </ul>
            </nav>
            <aside className='flex-col justify-start items-center lg:mr-[12%] mr-0 md:flex hidden'>
                <motion.h3 animate={animationText} className='lg:text-3xl text-2xl text-textColor font-theSeasons font-bold'>Profesjonalny makijaż na każdą okazję.</motion.h3>
                <motion.a animate={animationText} href="https://www.facebook.com/mauvebeautypl" className='bg-mainColor hover:bg-hoverColor px-10 py-4 mt-5 font-klein uppercase tracking-widest lg:text-lg text-base text-[#ece5df] hover:scale-105 duration-300'>Umów się</motion.a>
            </aside>
        </section>
      </header>
    );
  };
  
  export default Navbar;