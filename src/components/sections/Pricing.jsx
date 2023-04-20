import React from 'react'
import { pricing } from '../../constants'
import Button from '../modules/Button'
import { MdKeyboardArrowRight } from "react-icons/md";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2 className='text-secondary text-[48px] text-center font-bold'>Pricing</h2>
      <div className="bg-primary w-[450px] h-[1px] mb-16 mx-auto"></div>
      <div className='flex justify-between gap-20 flex-col md:flex-row'>
        {pricing.map((offer,index)=>( 
          <div key={"pricing"+index} className={`${(index === 1) ? "md:scale-110" : ""} border-secondary border-4 flex-1 flex flex-col p-10`}>
            <h3 className=' text-primary text-[26px] mt-5'>{offer.name}</h3>
            <h4 className=' text-secondary text-[16px] '>{offer.desc}</h4>
            <div className='flex text-secondary mt-5'>
              <div className='text-[50px] font-bold'>{offer.price[0]}</div>
              <div className='mt-3.5 font-bold'>{offer.price[1]}</div>
              <div className='mt-6 ml-2'> / {offer.per}</div>
            </div>
            <div className='w-[50%] mx-auto mb-6 mt-3'>
              <Button text={"Wybierz"} variation={(index === 1) ? 1 : 2} />
            </div>
            {offer.features.map((feature, index) => (
              <div key={"pricingFeature"+index} className='text-secondary my-2 flex'>
                <div className='mt-0.5'><MdKeyboardArrowRight color='rgb(235 192 38)'/></div>
                {feature}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing