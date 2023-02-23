import React, { useState, useEffect } from 'react';
import Modal from './modal';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const [allImg, setAllImg] = useState(false);
    const [clickedImg, setClickedImg] = useState();
    const [currentIndex, setCurrentIndex] = useState();

    const numberOfItems = images.length;

    const {ref, inView} = useInView();
    const animationText = useAnimation();

    const loadMore = () => {
      if(count >= numberOfItems) {
        setAllImg(true);
      } else {
        setCount(count + 4);
      }
    }

    const getImg = (image, index) => {
      setCurrentIndex(index);
      setClickedImg(image);
    }

    const handleRotationRight = () => {
      const totalLength = numberOfItems;
      if(currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = images[0];
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = images[newIndex];
      setClickedImg(newUrl);
      setCurrentIndex(newIndex);
    }

    const handleRotationLeft = () => {
      const totalLength = numberOfItems;
      if(currentIndex <= 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = images[totalLength - 1];
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = images[newIndex];
      setClickedImg(newUrl);
      setCurrentIndex(newIndex);
    }

    useEffect(() => {
      const importAll = (r) => {
        return r.keys().map(r);
      }
  
      const img = importAll(require.context('../../gallery', false, /\.(png|jpe?g|svg|JPE?G|PNG)$/));
      setImages(img);

      setAllImg(false);
      setCount(8);

      if(inView) {
        animationText.start({
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 1,
          }
        });
      } if(!inView) {
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
        <article ref={ref} id='moje-prace' className='w-full min-h-full md:mt-0 mt-10 lg:px-0 sm:px-10 px-2 bg-galleryBg'>
          <div className='lg:pl-[14%] pl-[0%] lg:pt-28 pt-16 flex justify-start items-end pb-10 gap-2 flex-wrap'>
            <h2 className='font-theSeasons font-bold lg:text-start text-center sm:text-5xl text-4xl tracking-widest'>Moje Prace</h2>
            <a href="https://www.instagram.com/mauve.pl/"><span className='text-base uppercase font-klein hover:underline'> &gt; zobacz na ig</span></a>
          </div>
          <motion.div animate={animationText} className='grid min-h-full lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:mx-20 mx-0 lg:mt-10 mt-5 lg:gap-5 gap-2 pb-10'>
            {images.slice(0,count).map((image, index) => (
              <div key={image} className='cursor-pointer hover:opacity-90 transition-all duration-100' onClick={() => getImg(image, index)}>
                <LazyLoadImage effect='blur' src={image} alt={`Image ${index}`} className='w-[430px] h-full aspect-square'/>
              </div>
            ))}
          </motion.div>
          <div className='flex justify-center items-center pb-10'>
            {allImg ? (
              <></>
            ) : (
              <button onClick={()=>{loadMore()}} className='bg-mainColor hover:bg-hoverColor px-10 py-4 font-klein uppercase tracking-widest text-lg text-[#ece5df] hover:scale-105 duration-300'>Zobacz więcej</button>
            )}
          </div>
          {clickedImg && 
            <Modal clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft}></Modal>
          }
        </article>
    );
  };
  
  export default Gallery;