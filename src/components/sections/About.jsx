import React from 'react'
import { Dubmell, Weight } from '../../assets'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='mt-20 md:mt-10 lg:mt-0'>
      <div className='flex md:flex-row flex-col-reverse justify-between items-center'>
        <img src={Weight} className='lg:w-[550px] md:w-[400px] md:block hidden sm:w-[430px] w-[330px]'/>
        <div className='flex flex-col'>
          <h2 className='lg:text-[48px] md:text-[40px] sm:text-[36px] text-[30px] md:text-start text-center font-semibold text-white'>Jestem Mateo!</h2>
          <div className='bg-primary lg:w-[500px] md:w-[400px] sm:w-[510px] w-[300px] h-[2px]'/>
          <p className='lg:w-[585px] md:w-[460px] sm:w-[520px] w-[310px] text-[20px] md:text-start text-center text-white mt-2 md:mb-0 mb-10'>
            Swoją przygodę ze sportami sylwetkowymi zacząłem w roku 2003, co przekłada się nie tylko na wielkie bicepsy, ale też ogromne doświadczenie. Jeśli jesteś systematyczny i dążysz do wyznaczonych celów, osiągniemy je wspólnie!
          </p>
          <div className='flex-1 flex md:justify-start justify-center gap-2 max-w-[585px] mt-2'>
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