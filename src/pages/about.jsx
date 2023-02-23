import React, { useEffect } from 'react';
import Logo from '../img/logo.png';
import Profile from '../img/profile.png'
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Background from '../img/bg-img.jpg';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Link } from "react-scroll";

const About = () => {

    const {ref, inView} = useInView({
      threshold: 0.5,
    });
    const animationPic = useAnimation();
    const animationText = useAnimation();

    useEffect(() => {
      if(inView) {
        animationPic.start({
          x: 0,
          transition: {
            type: 'tween',
            duration: 1.2,
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
          x: '+100vw',
          transition: {
            type: 'tween',
            duration: 1.2,
          }
        });
        animationText.start({
          opacity: 0,
          transition: {
            type: 'tween',
            duration: 1,
          }
        });
      }
    }, [inView]);
  
    return (
      <main className='w-full h-full md:pt-0 pt-[80px]'>
        <article ref={ref} id='o-mnie' className='lg:mt-44 md:mt-28 mt-0 bg-navbarBg flex justify-center lg:items-end items-center lg:gap-0 gap-5 w-full 2xl:h-[620px] h-auto lg:px-0 md:px-10 px-0 md:flex-row flex-col-reverse'>
            <motion.section transition={{layout: {duration: 1, type: 'spring'}}} layout className='w-full flex flex-col justify-center items-center font-theSeasons font-[500] lg:text-xl text-base lg:pl-[11%] md:text-start text-center md:px-0 px-4'>
                <img src={Logo} alt="Logo" className='xl:w-[500px] w-[350px] h-auto md:flex hidden lg:mb-10'/>
                <motion.div animate={animationText} className='md:h-[300px] h-[200px] overflow-y-scroll whitespace-pre-line scrollbar-thin scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl scrollbar-thumb-mainColor hover:scrollbar-thumb-hoverColor scrollbar-track-[#33333322] pr-4'>
                  <p>Nazywam się <strong>Dagmara Misiewicz</strong>. Jestem wizażystką i stylistką wykonującą makijaże na wyjątkowe okazje, czym pasjonuję się od 2016 r.<br/><br/></p>
                  <p>Inspirując się makijażami z wybiegów oraz śledząc najnowsze trendy, kształtuję swój własny styl. Przemycam go pracując przy sesjach zdjęciowych oraz z klientami indywidualnymi.<br/><br/></p>
                  <p>Szczególną uwagę przykładam do tego, aby moje prace były estetyczne, trwałe i przede wszystkim podkreślały naturalne piękno.<br/><br/></p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore expedita praesentium, qui libero dolores sit nulla necessitatibus eaque pariatur porro debitis cum voluptate fugiat reprehenderit, alias perferendis magni provident.<br/><br/></p>
                </motion.div>
                <div className='flex justify-between items-center gap-3 xl:flex-row flex-col mt-4'>
                  <Link to='oferta' smooth='true' duration={100}><button className='flex group justify-center items-center gap-5 md:w-[300px] bg-mainColor hover:bg-hoverColor px-10 py-4 font-klein uppercase tracking-widest lg:text-lg text-base text-[#ece5df] hover:scale-105 duration-300 mb-5'>Zobacz ofertę <FaArrowRight className='group-hover:rotate-90 duration-300'></FaArrowRight></button></Link>
                </div>
            </motion.section>
            <section className='w-full flex justify-center items-end my-0 relative'>
                <motion.picture animate={animationPic} className='md:w-auto w-full'>
                  <source media='(min-width: 768px)' srcSet={Profile} className='md:w-[470px] w-[300px] h-auto md:object-contain object-cover'/>
                  <img src={Background} alt="Background" className='md:w-[470px] w-full md:h-auto md:object-contain object-cover h-[300px] drop-shadow-2xl'/>
                </motion.picture>
                <div className='md:hidden flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto justify-center items-center bg-[#33333377]'>
                  <motion.img animate={animationPic} src={Logo} alt="Logo" className='w-[350px] h-auto'/>
                </div>
            </section>
        </article>
      </main>
    );
  };
  
  export default About;