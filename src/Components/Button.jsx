import React from 'react'

const Button = ({style}) => {
  return (
    <button className={`${style} font-poppins font-medium rounded-[10px] text-[18px] outline-none  text-primary py-4 px-6 bg-blue-gradient`}>Get Started</button>
  )
}

export default Button