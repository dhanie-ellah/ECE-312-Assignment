import React from 'react'
import Logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <section className=" p-[100px] px-[150px] text-xs flex justify-between items-start text-white footer_bg">
      <div className=" w-[30%] flex flex-col gap-[10px]">
        <div className=' w-[45%]'>
          <img src={Logo} alt="" className=' w-full'/>
        </div>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>

      <div className=" w-[15%] flex flex-col gap-[10px]">
        <p className=' font-bold'>Company</p>
        <p>About</p>
        <p>Testimonials</p>
        <p>Find a doctor</p>
        <p>Apps</p>
      </div>

      <div className=" w-[15%] flex flex-col gap-[10px]">
        <p className=' font-bold'>Region</p>
        <p>Indonesia</p>
        <p>Singapore</p>
        <p>Hongkong</p>
        <p>Canada</p>
      </div>

      <div className=" w-[15%] flex flex-col gap-[10px]">
        <p className=' font-bold'>Help</p>
        <p>Help center</p>
        <p>Contact support</p>
        <p>Instructions</p>
        <p>How it works</p>
      </div>
    </section>
  );
}

export default Footer