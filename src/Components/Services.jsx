import React from 'react'
import Search from '../Assets/Frame.png'
import Pharmacy from '../Assets/Frame (1).png'
import Consultation from '../Assets/Frame (2).png'
import Details from '../Assets/Frame (3).png'
import Emergency from '../Assets/Frame (4).png'
import Tracking from '../Assets/Frame (5).png'
import SVG from '../Assets/services_svg.png'

const Services = () => {
  return (
    <div className="p-10 px-[10rem] flex flex-col gap-5 relative">
      <h1 className=" text-3xl text-center z-10">Our services</h1>
      <p className=" text-center text-grey z-10">
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div className="flex flex-wrap justify-between gap-5 z-10">
        {/* Frame 1 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Search} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Search doctor</h1>
          <p className=" text-grey text-xs">
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>
        {/* Frame 2 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Pharmacy} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Online pharmacy</h1>
          <p className=" text-grey text-xs">
            Buy your medicines with our mobile application with a simple
            delivery system
          </p>
        </div>
        {/* Frame 3 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Consultation} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Consultation</h1>
          <p className=" text-grey text-xs">
            Free consultation with our trusted doctors and get the best
            recommendations
          </p>
        </div>
        {/* Frame 4 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Details} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Details info</h1>
          <p className=" text-grey text-xs">
            Free consultation with our trusted doctors and get the best
            recommendations
          </p>
        </div>
        {/* Frame 5 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Emergency} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Emergency care</h1>
          <p className=" text-grey text-xs">
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </p>
        </div>
        {/* Frame 6 */}
        <div className=" w-[30%] rounded-md drop-shadow-md bg-[#fff] p-10 flex flex-col gap-2">
          <img src={Tracking} alt="" className=" w-[25%]" />
          <h1 className=" font-bold">Tracking</h1>
          <p className=" text-grey text-xs">
            Track and save your medical history and health data
          </p>
        </div>

      </div>
      <img src={SVG} alt="" className=' absolute left-0 w-[45%] top-[10rem]' />
    </div>
  );
}

export default Services