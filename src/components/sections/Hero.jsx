import React from 'react'
import Button from '../modules/Button'
import { Bodybuilder, Trapeze, Trapeze2 } from '../../assets'

const Hero = () => {
  return (
    <section id="hero" className='mt-20 md:mt-10 lg:mt-0'>
        {/* <img src={Trapeze} className='absolute right-[40vh] -top-[1px]'/> */}
        {/* <img src={Trapeze2} className='prevent-select absolute right-[-6vh] -top-[2vh]'/> */}
        <div className='flex'>
          <div className='flex-1 leading-tight flex flex-col justify-center z-[1]'>
              <span className='text-primary font-semibold text-[12px] xs:text-[18px] md:text-[24px] xl:text-[32px]'>SKORZYSTAJ Z</span>
              <h1 className='text-secondary font-bold text-[25px] xs:text-[40px] md:text-[70px] xl:text-[90px] mt-1 mb-6'>TRENINGÓW SZYTYCH<br/>NA MIARĘ</h1>
              <div className='w-[225px] hidden ss:block'>
                  <Button text={"Sprawdź szczegóły"} variation={1} />
              </div>
          </div>
          <div className='flex-1'>
              <img src={Bodybuilder} className='prevent-select scale-90  sm:scale-1 relative z-[1] -top-2 sm:top-6 sm:-right-6' />
          </div>
        </div>
        <div className='w-[225px] mx-auto block ss:hidden'>
                  <Button text={"Sprawdź szczegóły"} variation={1} />
        </div>
    </section>
  )
}

export default Hero