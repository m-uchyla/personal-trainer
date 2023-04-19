import React from 'react'

const Button = ({text, variation}) => {
  return (
    <>
        <div className={`${(variation == 1) ? "border-2 border-primary bg-primary text-dark button-hover1 hover:text-primary " : "border-2 border-primary bg-dark text-primary button-hover2 hover:text-dark"} button-animation sm:mt-0 mt-2 grow button px-6 h-[45px] cursor-pointer flex-center relative`}>
            <button className={`text-[20px] z-10 font-semibold`}>{text}</button>
        </div>
    </>
  )
}

export default Button