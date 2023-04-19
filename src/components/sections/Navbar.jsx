import React, {useState} from 'react'
import Button from '../modules/Button'
import { navLinks } from '../../constants'
import { Favicon } from '../../assets'
import styles from '../../style'

const Navbar = () => {
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const [initNav, setInitNav] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
      
  }

  window.addEventListener('scroll', changeBackground);

  if(openCloseNav){
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }else{
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  return (
    <section id="navbar" className={`my-2 py-3 ${navbar ? "navbar-fixed active" : "navbar-absolute"} top-[-8px] left-0 w-full`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex justify-between items-center'>
            <div className='flex justify-evenly items-center'>
              <span className={`${!navbar ? "text-primary" : "text-dark"} font-bold sm:text-[18px] text-[13px]`}>Witeusz Uchyus</span>
              <img src={Favicon} className={`${navbar ? "brightness-[20%]" : "brightness-100"} w-[40px]`} />
              <span className={`${!navbar ? "text-primary" : "text-dark"} font-bold sm:text-[18px] text-[13px]`}>Personal Trainer</span>
            </div>
            <ul className='list-none sm:flex hidden items-center justify-between'>
              {navLinks.map((link, index) => (
                <li key={link.id} className={`${index === navLinks.length - 1 ? "mr-0" : "mr-3"} ${!navbar ? "text-primary" : "text-dark"} cursor-pointer`}>{link.title}</li>
              ))}
            </ul>
            <div className={`sm:hidden flex flex-1 justify-end items-center z-50`}>
                <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
                  <div className={` ${navbar ? "menu_burger-btn-fixed" : "menu_burger-btn"}  ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
                    onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
                  />
                </div>
                <div className={`-left-[100px] w-[200%] h-[200vh] absolute ${openCloseNav ? "bg-in" : "bg-out hidden"}`}></div>
                <div className={`p-6 bg-primary fixed top-0 right-0 w-[70%] h-[100%] ${(initNav) ? "hidden" : "flex flex-col"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
                  
                    <ul className='list-none flex-col justify-end items-center flex-1 mt-7'>
                        {navLinks.map((link, index)=>(
                        <div key={link.id}>
                          <li key={link.id} className={`font-poppins text-[24px] text-white font-normal cursor-pointer py-7`} onClick={()=>{handleClickScroll(link.id);setOpenCloseNav((prev) => !prev)}}>
                              <a href={link.href}>{link.title}</a>
                          </li>
                          {((index+1) == navLinks.length) ? "" : <div className='w-full h-[1px] bg-white'/>}
                        </div>
                        ))}
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar