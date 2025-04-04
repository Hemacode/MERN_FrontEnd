import React from 'react'

const TextInput = ({placeholder, value, cytest, onChange}) => {
  return (
      <input cy-test={cytest} placeholder={placeholder} onChange={onChange} value={value} className='form-control' type='text'/>
  )
}

export default TextInput
