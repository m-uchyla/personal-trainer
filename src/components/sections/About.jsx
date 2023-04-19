import React from 'react'
import { Dubmell, Weight } from '../../assets'

const About = () => {
  return (
    <section id='about' className='mt-20 md:mt-10 lg:mt-0'>
      <div className='flex justify-between items-center'>
        <img src={Weight} className='w-[550px]'/>
        <div>
          <h2 className='text-[48px] font-semibold text-white'>Jestem Mateold!</h2>
          <div className='bg-primary w-[500px] h-[1px]'/>
          <p className='max-w-[585px] text-[20px] text-white mt-2'>
            Swoją przygodę ze sportami sylwetkowymi zacząłem w latach 80, co przekłada się nie tylko na wielkie bicepsy, ale też ogromne doświadczenie. Jeśli jesteś systematyczny i dążysz do wyznaczonych celów, osiągniemy je wspólnie!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About