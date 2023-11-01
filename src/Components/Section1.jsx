import React from 'react'
import Image from "../Assets/trafalgar-illustration sec02 1.png";


const Section1 = () => {
  return (
    <section className=" flex justify-between items-center p-10 px-[10rem]">
      <div className=" w-[50%]">
        <img src={Image} alt="" className=" w-full" />
      </div>
      <div className=" w-[40%] flex flex-col gap-[10px] items-start">
        <h1 className=" text-4xl text-[38px] font-semibold">
          Leading healthcare providers
        </h1>
        <p className=" text-grey text-lg">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className=" border-2 border-blue rounded-full p-[10px] px-[25px] text-sm">
          Learn more
        </button>
      </div>
    </section>
  );
}

export default Section1