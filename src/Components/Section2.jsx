import React from 'react'
import Image from "../Assets/trafalgar-illustration sec03 1.png";


const Section2 = () => {
  return (
    <section className=" flex justify-between items-center p-10 px-[10rem]">
      <div className=" w-[40%] flex flex-col gap-[10px] items-start">
        <h1 className=" text-4xl text-[38px] font-semibold">
          Download our mobile apps
        </h1>
        <p className=" text-grey text-lg">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className=" border-2 border-blue  rounded-full p-[10px] px-[25px] text-sm">
          Download
        </button>
      </div>
      <div className=" w-[50%]">
        <img src={Image} alt="" className=" w-full" />
      </div>
    </section>
  );
}

export default Section2