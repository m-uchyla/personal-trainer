import React from 'react'

const Button = ({text, variation}) => {
  return (
    <>
        <div className={`${(variation == 1) ? "bg-primary text-dark" : "border-2 border-primary bg-dark text-primary"} button-animation sm:mt-0 mt-2 grow button px-6 h-[45px] cursor-pointer flex-center`}>
            <button className={`text-[20px] font-semibold`}>{text}</button>
        </div>
    </>
  )
}

export default Button