import React from 'react'
import './Button.scss'

const Button = ({ text, cytest, className, onClick, disabled = false }) => {
  return (
    <button cy-test={cytest} className={className} onClick={onClick} disabled={disabled} >{text}</button>
  )
}

export default Button
