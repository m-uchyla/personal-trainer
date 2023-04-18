import React from 'react'
import Button from '../modules/Button'
import { Bodybuilder, Trapeze, Trapeze2 } from '../../assets'

const Hero = () => {
  return (
    <section id="hero" className='flex mt-0'>
        {/* <img src={Trapeze} className='absolute right-[40vh] -top-[1px]'/> */}
        <img src={Trapeze2} className='prevent-select absolute right-0 -top-[2px]'/>
        <div className='h-[800px] flex-1 leading-tight flex flex-col justify-center'>
            <span className='text-primary font-semibold text-[25px]'>SKORZYSTAJ Z</span>
            <h1 className='text-secondary font-bold text-[90px] mt-1 mb-6'>TRENINGÓW SZYTYCH<br/>NA MIARĘ</h1>
            <div className='w-[225px]'>
                <Button text={"Sprawdź szczegóły"} variation={1} />
            </div>
        </div>
        <div className='flex-1'>
            <img src={Bodybuilder} className='prevent-select relative z-[1]' />
        </div>
        
    </section>
  )
}

export default Hero