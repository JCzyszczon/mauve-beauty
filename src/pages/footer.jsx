import React, { useEffect } from 'react';
import { FaInstagram, FaFacebookSquare, FaTiktok, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
  
const Footer = () => {

  const {ref, inView} = useInView({
    threshold: 0.5,
  });
  const animationText = useAnimation();
  const animationText2 = useAnimation();
  const animationText3 = useAnimation();

  useEffect(() => {
    if(inView) {
      animationText.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
        }
      });
      animationText2.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: 0.3,
        }
      });
      animationText3.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: 0.6,
        }
      });
    } if(!inView) {
      animationText.start({
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 1.6,
        }
      });
      animationText2.start({
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 1.3,
        }
      });
      animationText3.start({
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 1,
        }
      }); 
    }
  }, [inView]);

  return (
    <footer ref={ref} className='bg-navbarBg w-full h-auto mt-20'>
      <section className='w-full h-auto flex justify-between items-start md:flex-row flex-col lg:px-20 px-4 pt-20 pb-8 gap-10'>
        <motion.div animate={animationText} className='w-full'>
          <h3 className='font-theSeasons font-bold uppercase lg:text-3xl text-xl text-[#000] border-b border-mainColor pb-2'>Lokalizacja</h3>
          <iframe className='w-full h-[250px] mt-8' title='google-maps-localization' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1290.8364659284553!2d19.7566471!3d49.6792993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716778402efd18d%3A0x4e3546c945765a48!2sOsielec%20618!5e0!3m2!1spl!2spl!4v1676827731405!5m2!1spl!2spl" allowFullScreen="false" loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
        </motion.div>
        <motion.div animate={animationText2} className='w-full'>
          <h3 className='font-theSeasons font-bold uppercase lg:text-3xl text-xl text-[#000] border-b border-mainColor pb-2'>Kontakt</h3>
          <div className='mt-8 flex flex-col justify-center items-start gap-5'>
            <span className='flex justify-start items-center flex-wrap gap-5 text-[#000] lg:text-xl text-lg font-klein'><FaPhone></FaPhone> +48 123 123 123</span>
            <span className='flex justify-start items-center flex-wrap gap-5 text-[#000] lg:text-xl text-lg font-klein'><IoMdMail></IoMdMail> przykladowyemail@gmail.com</span>
          </div>
        </motion.div>
        <motion.div animate={animationText3} className='w-full'>
          <h3 className='font-theSeasons font-bold uppercase lg:text-3xl text-xl text-[#000] border-b border-mainColor pb-2'>Obserwuj mnie na</h3>
          <div className='flex justify-center items-center mt-8 gap-5'>
            <a href="https://www.facebook.com/mauvebeautypl" target='_blank' rel="noreferrer"><FaFacebookSquare className='text-mainColor hover:text-hoverColor text-4xl'></FaFacebookSquare></a>
            <a href="https://www.instagram.com/mauve.pl/" target='_blank' rel="noreferrer"><FaInstagram className='text-mainColor hover:text-hoverColor text-4xl'></FaInstagram></a>
            <a href="https://tiktok.com" target='_blank' rel="noreferrer"><FaTiktok className='text-mainColor hover:text-hoverColor text-4xl'></FaTiktok></a>
          </div>
        </motion.div>
      </section>
      <motion.section animate={animationText} className='w-full bg-navbarBg py-5 flex justify-between items-center lg:px-20 px-4 border-t-2 border-mainColor sm:flex-row flex-col sm:gap-0 gap-5'>
        <a href="/"><span className='font-maghony text-3xl tracking-widest uppercase'>mauve</span></a>
        <span className='text-lg text-center font-klein'>&copy; mauve.pl - wszelkie prawa zastrzeżone</span>
        <span className='text-lg font-klein'>by <a href="https://github.com/JCzyszczon" target='_blank' rel="noreferrer" className='hover:text-mainColor'>jczyszczon</a></span>
      </motion.section>
    </footer>
  );
};
  
export default Footer;