import React from 'react'

const Input = ({
  type = 'text',
  name,
  label = '',
  placeholder = '',
  button,
  value = '',
  onChange,
  tip = '',
  step = '',
  min,
  readOnly
}) => {
  return (
    <div className='mb-2'>
      <label
        className='text-gray-700 text-sm font-bold uppercase'
        htmlFor={name}
      >
        {label}
      </label>
      <div className='bg-blue-50 flex flex-wrap justify-between mt-1 py-2 px-4 rounded-md focus-within:bg-gray-50 border border-gray-300'>
        <input
          className='bg-transparent outline-none flex-1'
          name={name}
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          min={min ? min : ''}
          step={step ? step : ''}
          placeholder={placeholder}
          readOnly={readOnly ? true : false}
        />
        <div>{button}</div>
      </div>
      <span className='text-xs text-red-500'>{tip}</span>
    </div>
  )
}

export default Input
