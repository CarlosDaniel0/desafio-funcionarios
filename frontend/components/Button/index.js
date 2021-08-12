import React from 'react'
import Link from 'next/link'

const Button = ({ children, type = 'button', onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      {children}
    </button>
  )
}

const ButtonLink = ({ children, href, Icon }) => {
  return (
    <div className='rounded-md bg-green-500 hover:bg-green-700 px-4 py-2 inline-block text-white '>
      <Link href={href}>
        <a>
          {Icon && <Icon className='inline-block transform -translate-y-0.5' />}{' '}
          {children}
        </a>
      </Link>
    </div>
  )
}

const ButtonLinkOutline = ({ children, href, Icon }) => {
  return (
    <div className='bg-transparent rounded-md border border-green-500 hover:bg-green-500 px-4 py-2 inline-block text-green-500 hover:text-white'>
      <Link href={href}>
        <a>
          {Icon && <Icon className='inline-block transform -translate-y-0.5' />}{' '}
          {children}
        </a>
      </Link>
    </div>
  )
}

Button.Link = ButtonLink
Button.LinkOutline = ButtonLinkOutline

export default Button
