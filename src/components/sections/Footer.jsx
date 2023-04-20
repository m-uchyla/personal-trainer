import React from 'react'
import { privacy } from '../../constants'

import styles from '../../style';
import { Favicon, logo } from '../../assets';

const Footer = () => {
  return (
    <footer className='mt-[200px]'>
      <div id="footer" className='absolute bottom-0 left-0 w-full bg-darker'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <div className='flex justify-between my-3'>
                <a href='/'>
                    <img src={logo}/>
                </a>
                <ul className='flex items-center'>
                  {privacy.map((item, index) => (
                    <li key={item.id} className={`links-footer text-secondary sm:text-[16px] text-[7px] ${index === privacy.length - 1 ? "mr-0" : "sm:mr-5 mr-2"} hover:text-primary cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer