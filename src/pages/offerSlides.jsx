import React from 'react';
import { FaClock } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const OfferSlides = () => {

    const [elements, setElements] = useState(3);
    const [openIndex, setOpenIndex] = useState(-1);

    const {ref, inView} = useInView({
        threshold: 0.5,
    });

    const animationOffer = useAnimation();
  
    const handleClick = (index) => {
      setOpenIndex(index === openIndex ? -1 : index);
    };

    const items =[
        {
          id: 1,
          title: 'Makijaż okolicznościowy',
          description: 'Wesele, Studniówka, Andrzejki, Sylwester, a może romantyczna randka lub wypad z przyjaciółkami? \n\n Mamy wiele okazji do świętowania! \n\n Zadbam o to, aby każda z moich klientek wyglądała jak najpiękniej w tym wyjątkowym dniu.',
          time: 'do 1,5h',
          price: 150,
        },
        {
          id: 2,
          title: 'Makijaż ślubny',
          description: 'Makijaż ślubny łączy w sobie cechy makijażu dziennego, wieczorowego i fotograficznego. \n\n Zadbam o to, aby maksymalnie podkreślał naturalną urodę Panny Młodej, wyglądał świeżo i przetrwał do rana.',
          time: 'do 2h',
          price: 180,
        },
        {
          id: 3,
          title: 'Makijaż próbny ślubny',
          description: 'Szczególnie ważne jest wykonanie makijażu próbnego. \n\n Dzięki temu Panna Młoda będzie mieć pewność, że w dniu ślubu będzie wyglądać tak jak sobie wymarzyła oraz sprawdzi czy aby na pewno wszystkie kosmetyki dobrze zachowują się na skórze.',
          time: 'do 2h',
          price: 180,
        },
        {
          id: 4,
          title: 'Laminacja + regulacja brwi',
          description: 'Laminacja brwi wpływa na elastyczność włosków. Dzięki temu zabiegowi niesforne włoski rosnące w różnych kierunkach zostają ujarzmione. Efekt ten utrzymuje się do <strong>6 tygodni.</strong>\n\n Celem regulacji jest wyrównanie asymetrii brwi i nadanie im odpowiedniego kształtu przez usunięcie niechcianych włosków.',
          time: 'do 45min',
          price: 80,
        },
        {
          id: 5,
          title: 'Koloryzacja + regulacja brwi',
          description: '<strong>Henna:</strong>\n - dla osób z większą asymetrią lub ubytkami w brwiach chcących przyciemnić kolor włosków i poprawić kształt brwi\n -henna na włoskach <strong>utrzymuje się do 3 tygodni, a na skórze do 10 dni</strong>\n<strong>FARBKA:</strong>\n - nadaje delikatny efekt koloryzacji na skórze, a mocniejszy na włoskach\n - farbka <strong>utrzymuje się do 3 tygodni</strong>',
          time: 'do 45min',
          price: 80,
        },
        {
          id: 6,
          title: 'Laminacja + Koloryzacja + Regulacja',
          description: 'Całkowita metamorfoza brwi, które zostaną dopasowane do urody klientki. \n\n Dzięki regulacji i koloryzacji zostanie nadany odpowiedni kształt, a laminacja sprawi że włoski będą się układać w pożądanym kierunku.',
          time: 'do 1h',
          price: 100,
        },
    ]

    useEffect(() => {
        if(window.innerWidth >= 1100) {
            setElements(3);
        } else if(window.innerWidth < 1100 && window.innerWidth >= 750) {
            setElements(2);
        } else {
            setElements(1);
        }

        if(inView) {
            animationOffer.start({
              opacity: 1,
              transition: {
                type: 'tween',
                duration: 1,
              }
            });
        } if (!inView) {
            animationOffer.start({
              opacity: 0,
              transition: {
                type: 'tween',
                duration: 1,
              }
            });
        }
    }, [inView]);
  
    return (
        <motion.section ref={ref} animate={animationOffer} className='w-full h-[100%] lg:px-[5%] px-6 my-5 lg:mb-20 mb-10 flex justify-center items-center'>
            <Swiper
            slidesPerView={elements}
            spaceBetween={30}
            loop='true'
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="w-full h-full bg-[#fff] flex justify-start items-center"
            >
                {items.map((item, index) => {
                return (
                    <motion.section key={item.id}>
                        <SwiperSlide key={item.title} onClick={() => handleClick(index)} className='bg-[#eee] p-10 my-10 flex flex-col justify-center text-start items-center gap-5 group cursor-pointer drop-shadow-lg'>
                            <motion.h2 transition={{layout: {duration: 1, type: 'spring'}}} layout='position' className='font-theSeasons font-bold uppercase sm:text-2xl text-xl text-center'>{item.title}</motion.h2>
                            {openIndex === index && (
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6}} className='flex flex-col gap-5 font-theSeasons sm:text-base text-[14px] my-3'>
                            <p className='whitespace-pre-line' dangerouslySetInnerHTML={{__html: item.description}}></p>
                            </motion.div>
                            )}
                            <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout='position' className='flex sm:flex-row flex-col justify-center items-center sm:gap-10 gap-1 mt-5 text-start'>
                            <motion.span className='flex justify-center items-center gap-2 flex-wrap'><FaClock className='text-mainColor sm:text-2xl text-xl'></FaClock><p className='font-theSeasons sm:text-lg text-base font-bold'>{item.time}</p></motion.span>
                            <motion.span className='flex justify-center items-center gap-2 flex-wrap'><ImPriceTag className='text-mainColor sm:text-2xl text-xl'></ImPriceTag><p className='font-theSeasons sm:text-lg text-base font-bold'>{item.price} zł</p></motion.span>
                            </motion.div>
                            <motion.div className='flex justify-center items-center'>
                            <motion.button className='bg-mainColor group-hover:bg-hoverColor px-5 py-2 font-klein uppercase tracking-widest text-base text-center text-[#ece5df] group-hover:scale-105 duration-300 mt-6'>{openIndex === index ? (<span>Zamknij</span>) : (<span>Przeczytaj</span>)}</motion.button>
                            </motion.div>
                        </SwiperSlide>
                    </motion.section>
                )
                })}
            </Swiper>
        </motion.section>
    );
  };
  
  export default OfferSlides;