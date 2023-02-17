import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
const slider = [
  {
    url:'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    url:'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    url:'https://images.unsplash.com/photo-1544067612-e676aca74a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

function Carousel() {
  const[slide, setSlide] = useState(0);
  // setting carousel image to change ...
  const length = slider.length;
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
   setSlide(slide === 0 ? length - 1 : slide - 1);
  }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
    <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-black cursor-pointer left-8"/>
    <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-black cursor-pointer right-8"/>
      {slider.map((item,index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
         {index === slide && ( <img className='w-full rounded-md ' src={item.url} alt='/'/>)}
  
        </div>

      ))}
      
    </div>
  );
};

export default Carousel
