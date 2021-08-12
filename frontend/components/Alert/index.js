import React from 'react'

const Alert = ({ children, title, Icon, bgColor, borderColor, textColor }) => {
  return (
    <div
      className={`bg-${bgColor}  border-l-4 border-${borderColor} text-${textColor} p-4`}
    >
      <p className='font-bold'>
        {title} {Icon && <Icon className='w-6 inline-block' />}
      </p>
      <p>{children}</p>
    </div>
  )
}

// default orange-100 orange-500 orange-700
export default Alert
