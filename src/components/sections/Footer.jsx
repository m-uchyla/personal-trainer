import React from 'react'
import { privacy } from '../../constants'

import styles from '../../style';
import { Favicon } from '../../assets';

const Footer = () => {
  return (
    <div className='mt-[200px]'>
      <section id="footer" className='absolute bottom-[-100px] left-0 w-full bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <div className='flex justify-between my-3'>
                <a href='/'>
                  <div className='flex flex-row items-center'>
                    <p className='sm:text-[20px] text-[12px] text-dark font-semibold mr-1'>Witeusz Uchyus</p>
                    <img src={Favicon} className={`brightness-[10%] w-[30px]`} />
                    <p className='sm:text-[20px] text-[12px] text-dark font-semibold ml-1'>Personal Trainer</p>
                  </div>
                </a>
                <ul className='flex items-center'>
                  {privacy.map((item, index) => (
                    <li key={item.id} className={`links-footer sm:text-[16px] text-[7px] ${index === privacy.length - 1 ? "mr-0" : "sm:mr-5 mr-2"} cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Footer