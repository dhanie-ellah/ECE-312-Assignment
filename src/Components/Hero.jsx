import React from 'react'
import Image from '../Assets/trafalgar-header illustration 1.png'

const Hero = () => {
  return (
    <section className=' flex justify-between items-center p-10 px-[10rem]'>
      <div className=' w-[40%] flex flex-col gap-[10px] items-start'>
        <h1 className=' text-4xl text-[38px] font-semibold'>Virtual healthcare for you</h1>
        <p className=' text-grey text-lg'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className=' text-white bg-blue rounded-full p-[10px] px-[25px] text-sm'>Consult today</button>
      </div>
      <div className=' w-[50%]'>
        <img src={Image} alt="" className=' w-full' />
      </div>
    </section>
  );
}

export default Hero