import React, { useState } from 'react'
import Card from './Card';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Testimonial = (props) => {
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
      function leftShiftHandler()
      {
        if(index-1<0)
        {
            setIndex(reviews.length-1);
          
          
      }
      else
      {
        setIndex(index-1);
    
      }
    }
      function rightShiftHandler()
      {
           if(index+1>=reviews.length)
           {
            setIndex(0);
           }
           else
           {
            setIndex(index+1);
           }
      }
      function surpriseHandler()
      {  let randomIndex=Math.floor(Math.random()*reviews.length);
          setIndex(randomIndex);

      }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 
       hover:shadow-2xl transition-all duration-700           '>
       <Card review={reviews[index]}/>
       <div className='flex gap-4 mt-6 text-3xl  items-center justify-center'>
            <button  onClick={leftShiftHandler} className='text-violet-600 hover:text-violet-950'>
              <FaArrowAltCircleLeft />
            </button>
            <button onClick={rightShiftHandler} className='text-violet-600 hover:text-violet-950'>
            <FaArrowAltCircleRight />

            </button>
          </div>
          <div className='mt-6'>
             <button onClick={surpriseHandler} className='bg-violet-600 text-white py-2 px-4 rounded-xl font-bold hover:bg-violet-950 transition-all  duration-200    '>Surprise Me</button>
          </div>
    </div>
  )
}

export default Testimonial