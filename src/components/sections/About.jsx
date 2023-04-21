import React from 'react'
import { Dubmell, Weight } from '../../assets'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='mt-20 md:mt-10 lg:mt-0'>
      <div className='flex justify-between items-center'>
        <img src={Weight} className='w-[550px]'/>
        <div>
          <h2 className='text-[48px] font-semibold text-secondary'>Jestem Mateold!</h2>
          <div className='bg-primary w-[500px] h-[2px]'/>
          <p className='max-w-[585px] text-[20px] text-secondary mt-2'>
            Swoją przygodę ze sportami sylwetkowymi zacząłem w latach 80, co przekłada się nie tylko na wielkie bicepsy, ale też ogromne doświadczenie. Jeśli jesteś systematyczny i dążysz do wyznaczonych celów, osiągniemy je wspólnie!
          </p>
          <div className='flex-1 flex justify-start gap-2 max-w-[585px] mt-2'>
            <a className='cursor-pointer'>
              <FaTwitterSquare size={50} color={"rgb(235 192 38)"}/>
            </a>
            <a className='cursor-pointer'>
              <FaFacebookSquare size={50} color={"rgb(235 192 38)"} />
            </a>
            <a className='cursor-pointer'>
              <FaInstagramSquare size={50} color={"rgb(235 192 38)"} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>

        
      </div>
    </section>
  )
}

export default About