import {IoMdClose} from 'react-icons/io';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';

const Modal = ({ clickedImg, handleRotationRight, setClickedImg, handleRotationLeft }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    }

    return(
        <div className="fixed w-[100%] h-[100%] top-0 left-0 right-0 bg-[#333333aa] flex justify-center items-center dismiss select-none scroll z-[100]" onClick={handleClick}>
            <img src={clickedImg} alt="Bigger Picture" className='md:h-full h-auto md:w-auto w-full md:py-20 py-5 md:px-20 px-5'/>
            <div className='absolute right-0 top-0 p-5 bg-mainColor cursor-pointer z-[99] dismiss' onClick={handleClick}>
                <IoMdClose className='text-5xl text-[#fff] font-extrabold dismiss' onClick={handleClick}></IoMdClose>
            </div>
            <div onClick={handleRotationRight} className="absolute right-0 top-0 flex justify-center items-center h-full cursor-pointer pr-4 z-[98]">
                <BsChevronRight className='text-5xl text-[#fff] font-extrabold'></BsChevronRight>
            </div>
            <div onClick={handleRotationLeft} className="absolute left-0 top-0 flex justify-center items-center h-full cursor-pointer pl-4 z-[98]">
                <BsChevronLeft className='text-5xl text-[#fff] font-extrabold'></BsChevronLeft>
            </div>
        </div>
    );
};

export default Modal;