import React from 'react'
import { privacy } from '../../constants'

import styles from '../../style';
import { Favicon, logo, WM } from '../../assets';

const Footer = () => {
  return (
    <footer className='mt-[200px]'>
      <div id="footer" className='absolute bottom-0 left-0 w-full bg-darker'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <div className='flex justify-between md:flex-row flex-col gap-y-2 items-center my-3'>
                <a href='/' className='md:scale-1 scale-75'>
                    <img src={logo}/>
                </a>
                <ul className='flex items-center'>
                  {privacy.map((item, index) => (
                    <li key={item.id} className={`links-footer text-secondary sm:text-[16px] text-[12px] ${index === privacy.length - 1 ? "mr-0" : "sm:mr-5 mr-2"} hover:text-primary cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
                <a href="https://web-masters.pl" className='md:mt-0 mt-1'>
                  <div className='flex items-center text-secondary'>
                    <h5 className='mr-2 sm:text-[16px] text-[10px]'>Zaprojektowane przez</h5>
                    <img src={WM} className='sm:w-[35px] sm:h-[35px] w-[15px] h-[15px]' />
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer