import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MainPic2 from '../img/mainPic2.JPG';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import OfferSlides from './offerSlides';
  
const Offer = () => {

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
    <section id='oferta' className='w-full h-auto sm:mt-20 mt-10 lg:px-0 sm:px-10 px-2 mb-2'>
        <h2 className='font-theSeasons font-bold text-center sm:text-5xl text-4xl tracking-widest mb-10'>Oferta</h2>
        <aside className='flex justify-start items-center sm:gap-5 gap-3 lg:pl-[11%] pl-[0%]'>
            <div>
                <FaMapMarkerAlt className='text-mainColor sm:text-6xl text-5xl'></FaMapMarkerAlt>
            </div>
            <div>
                <h3 className='font-klein uppercase tracking-widest sm:text-3xl text-xl mb-2'>Osielec</h3>
                <p className='font-theSeasons md:text-lg sm:text-base text-sm'>Darmowy dojazd do klienta na terenie Osielca + w obrębie 30km przy minimum 5 osobach korzystających z usługi makijażu.</p>
            </div>
        </aside>
        <OfferSlides></OfferSlides>
        <aside className='flex justify-start items-center sm:gap-5 gap-3 lg:pl-[11%] pl-[0%]'>
            <div>
                <FaMapMarkerAlt className='text-mainColor sm:text-6xl text-5xl'></FaMapMarkerAlt>
            </div>
            <div>
                <h3 className='font-klein uppercase tracking-widest sm:text-3xl text-xl'>Kraków</h3>
            </div>
        </aside>
        <section ref={ref} className='flex md:flex-row flex-col justify-center items-center lg:h-[400px] h-auto my-5 xl:gap-20 gap-10'>
          <section className='flex flex-col gap-5 mx-5'>
            <h2 className='font-theSeasons font-bold uppercase sm:text-2xl text-xl text-center'>Pakiet ślubny z dojazdem do krakowa</h2>
            <motion.div animate={animationText} className='flex flex-col gap-5 font-theSeasons xl:text-lg sm:text-base text-[14px] my-3'>
              <p>W skład pakietu wchodzą:</p>
              <div className='flex gap-5 flex-wrap'>
                <p>- makijaż próbny ślubny z dojazdem do klienta (wykonywany od poniedziałku do piątku)</p><span className='flex gap-2 items-center text-mainColor'><FaClock></FaClock> do 2h</span>
              </div>
              <div className='flex gap-5 flex-wrap'>
                <p>- makijaż Panny Młodej w dniu ślubu</p><span className='flex gap-2 items-center text-mainColor'><FaClock></FaClock> do 2h</span>
              </div>
              <div className='flex gap-5 flex-wrap'>
                <p>- maksymalnie 4 dodatkowe makijaże okazjonalne w dniu ślubu</p><span className='flex gap-2 items-center text-mainColor'><FaClock></FaClock> do 2h</span>
              </div>
            </motion.div>
            <div className='flex justify-end items-center'>
              <span className='flex justify-center items-center gap-2'><ImPriceTag className='text-mainColor sm:text-2xl text-xl'></ImPriceTag> <p className='font-theSeasons sm:text-lg text-base font-bold'>1400 zł</p></span>
            </div>
          </section>
          <motion.section animate={animationPic} className='drop-shadow-2xl'>
            <img src={MainPic2} alt="Offer Element" className='md:w-auto w-[300px] md:h-[600px] md:object-contain object-cover'/>
          </motion.section>
        </section>
    </section>
  );
};
  
export default Offer;