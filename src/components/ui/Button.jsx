import React from 'react'

const Button = ({className , disable ,type , onclick , children ,value }) => {
  return (
    <button className={`bg-red-600 ${className}`}
    disabled={disable}
    type={type}
    onClick={onclick}
    value={value}
    >
        {children}
        </button>
  )
}

export default Button




