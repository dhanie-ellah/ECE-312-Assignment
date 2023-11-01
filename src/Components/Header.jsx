import React from 'react'
import Logo from '../Assets/logo.png'

const Header = () => {
  return (
    <section className=' flex justify-between p-[30px]'>
      <div className=' w-[10%]'>
        <img src={Logo} alt="" className=' w-full'/>
      </div>
      <div className=' flex gap-5 text-sm'>
        <a href="/">Home</a>
        <a href="/" className=' text-grey'>Find a doctor</a>
        <a href="/" className=' text-grey'>Apps</a>
        <a href="/" className=' text-grey'>Testimonials</a>
        <a href="/" className=' text-grey'>About us</a>
      </div>
    </section>
  );
}

export default Header