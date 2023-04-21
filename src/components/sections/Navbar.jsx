import React, {useState} from 'react'
import Button from '../modules/Button'
import { navLinks } from '../../constants'
import { Favicon, logo } from '../../assets'
import styles from '../../style'

const Navbar = () => {
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const [initNav, setInitNav] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [navActive, setNavActive] = useState(null);

  const changeBackground = () => {
    if(window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
      
  }

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("[id='navLink']");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 250) {
        current = section.getAttribute("id"); 
      }
    });

    navLi.forEach((li,index) => {
      if (li.classList.contains(current)) {
        setNavActive(current);
      }
      if(current === "hero")setNavActive(null);
    });
  };

  function smoothScroll(id){
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + (-75);

    window.scrollTo({top: y, behavior: 'smooth'});
  }


  window.addEventListener('scroll', changeBackground);

  if(openCloseNav){
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }else{
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  return (
    <nav className={`my-2 py-3 ${navbar ? "navbar-fixed active" : "navbar-absolute"} top-[-8px] left-0 w-full`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex justify-between items-center'>
            <a href="/">
              <img src={logo} className={`${navbar ? "brightness-[100%]" : "brightness-100"}`} />
            </a>
            <ul className='list-none sm:flex hidden items-center justify-between'>
              {navLinks.map((link, index) => (
                <div key={link.id}>
                  <li onClick={()=>smoothScroll(link.href.slice(1))} id="navLink" className={`${index === navLinks.length - 1 ? "mr-0" : "mr-3"} text-secondary ${(navActive == link.href.slice(1)) ? "text-red-500" : ""} ${link.href.slice(1)} hover:text-primary cursor-pointer`}>{link.title}</li>
                  {(navActive == link.href.slice(1)) ? <div className={`bg-primary -mb-[2px] h-[2px] ${index === navLinks.length - 1 ? "mr-0" : "mr-3"}`} /> : ""}
                </div>
              ))}
            </ul>
            <div className={`sm:hidden flex flex-1 justify-end items-center z-50`}>
                <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
                  <div className={` ${navbar ? "menu_burger-btn-fixed" : "menu_burger-btn"}  ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
                    onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
                  />
                </div>
                <div className={`-left-[100px] w-[200%] h-[200vh] absolute ${openCloseNav ? "bg-in" : "bg-out hidden"}`}></div>
                <div className={`p-6 bg-dark fixed top-0 right-0 w-[70%] h-[100%] ${(initNav) ? "hidden" : "flex flex-col"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
                  
                    <ul className='list-none flex-col justify-end items-center flex-1 mt-7'>
                        {navLinks.map((link, index)=>(
                        <div key={link.id}>
                          <li key={link.id} className={`font-poppins text-[24px] text-white font-normal cursor-pointer py-7`} onClick={()=>{}}>
                              <div onClick={() => {smoothScroll(link.href.slice(1));setOpenCloseNav(false)}} >{link.title}</div>
                          </li>
                          {((index+1) == navLinks.length) ? "" : <div className='w-full h-[2px] bg-primary'/>}
                        </div>
                        ))}
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar