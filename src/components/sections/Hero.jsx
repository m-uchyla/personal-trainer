import React from 'react'
import Button from '../modules/Button'
import { Bodybuilder, Trapeze, Trapeze2 } from '../../assets'

const Hero = () => {
  return (
    <section id="hero" className='sm:mt-20 lg:mt-0'>
        {/* <img src={Trapeze} className='absolute right-[40vh] -top-[1px]'/> */}
        {/* <img src={Trapeze2} className='prevent-select absolute right-[-6vh] -top-[2vh]'/> */}
        <div className='flex'>
          <div className='flex leading-tight flex-col justify-center z-[1] sm:max-w-[100%] max-w-[250px]'>
              <span className='text-primary font-semibold text-[12px] xs:text-[18px] md:text-[24px] xl:text-[32px]'>SKORZYSTAJ Z</span>
              <h1 className='text-secondary font-bold text-[30px] xs:text-[40px] md:text-[70px] xl:text-[90px] mt-1 mb-6'>TRENINGÓW SZYTYCH<br/>NA MIARĘ</h1>
              <div className='w-[225px] hidden ss:block'>
                  <Button text={"Sprawdź szczegóły"} variation={1} />
              </div>
          </div>
          <div className='flex'>
              <img src={Bodybuilder} className='prevent-select sm:w-[100%] sm:h-[100%] w-[300px] h-[400px]  sm:relative absolute z-[1] -top-[-80px] sm:top-6 sm:-right-0 ss:-right-[130px] -right-32' />
          </div>
        </div>
        <div className='sm:w-[225px] w-[140px] sm:mx-auto block ss:hidden'>
          <Button text={"Sprawdź szczegóły"} variation={1} />
        </div>
    </section>
  )
}

export default Hero