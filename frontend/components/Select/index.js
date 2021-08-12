import React from 'react'

const Select = ({
  children,
  name,
  label = '',
  button,
  onChange,
  value = ''
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
        <select
          className='flex-1 bg-transparent'
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
        <div>{button}</div>
      </div>
    </div>
  )
}

const Option = ({ children, id }) => {
  return (
    <option key={id} value={id}>
      {children}
    </option>
  )
}

Select.Option = Option

export default Select
