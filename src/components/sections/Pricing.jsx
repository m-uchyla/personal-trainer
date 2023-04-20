import React from 'react'
import { pricing } from '../../constants'
import Button from '../modules/Button'
import { MdKeyboardArrowRight } from "react-icons/md";
import { mostChosen } from '../../assets';

const Pricing = () => {
  return (
    <section id="pricing">
      <h2 className='text-secondary text-[48px] text-center font-bold'>Oferty</h2>
      <div className="bg-primary sm:w-[450px] w-[100%] h-[2px] mb-16 mx-auto" />
      <div className='flex justify-between xl:gap-20 gap-10 flex-col md:flex-row'>
        {pricing.map((offer,index)=>( 
          <div key={"pricing"+index} className={`${(index === 1) ? "md:scale-110" : ""} border-secondary border-4 flex-1 flex flex-col p-10`}>
            <h3 className=' text-primary text-[26px] mt-5'>{offer.name}</h3>
            <h4 className=' text-secondary text-[16px] '>{offer.desc}</h4>
            <div className='flex text-secondary mt-5'>
              <div className='xl:text-[50px] text-[40px] font-bold'>{offer.price[0]}</div>
              <div className='mt-3.5 font-bold'>{offer.price[1]}</div>
              <div className='mt-6 ml-2 xl:text-[16px] text-[12px]'> / {offer.per}</div>
            </div>
            <div className='w-[50%] mx-auto mb-6 mt-3'>
              <Button text={"Wybierz"} variation={(index === 1) ? 1 : 2} />
            </div>
            <div className='sm:mb-0 mb-10'>
            {offer.features.map((feature, index) => (
              <div key={"pricingFeature"+index} className='text-secondary my-2 flex'>
                <div className='mt-0.5'><MdKeyboardArrowRight color='rgb(235 192 38)'/></div>
                {feature}
              </div>
              
            ))}
            </div>
            {(index === 1) ? 
            <div className='relative'>
              <img src={mostChosen} className='md:scale-75 scale-[0.60] absolute md:top-[-65px] md:right-[-70px] top-[-110px] right-[-80px] w-[200px] h-[200px]'/>
            </div>
            : ""}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing