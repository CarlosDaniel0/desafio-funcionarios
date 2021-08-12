import React, { useState } from 'react'
import { MdHome, MdPerson, MdWork } from 'react-icons/md'
import Menu from '../Menu'

const Layout = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  function close() {
    setSideBarOpen(false)
  }

  function open() {
    setSideBarOpen(true)
  }

  return (
    <div>
      <div className='flex h-screen bg-gray-200'>
        <div
          onClick={close}
          className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
            sidebarOpen ? 'block' : 'hidden'
          }`}
        ></div>

        <div
          className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0' +
            ${
              sidebarOpen
                ? 'translate-x-0 ease-out'
                : '-translate-x-full ease-in'
            }
            `}
        >
          <Menu.Brand>Funcionários</Menu.Brand>

          <Menu.Nav>
            <Menu.NavItem href='/' Icon={MdHome} onClick={() => close()}>
              Home
            </Menu.NavItem>

            <Menu.NavItem
              href='/employee'
              Icon={MdPerson}
              onClick={() => close()}
            >
              Funcionários
            </Menu.NavItem>

            <Menu.NavItem href='/role' Icon={MdWork} onClick={() => close()}>
              Cargos
            </Menu.NavItem>
          </Menu.Nav>
        </div>
        <div className='flex-1 flex flex-col overflow-hidden'>
          <header className='flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600'>
            <div className='flex items-center'>
              <button
                onClick={open}
                className='text-gray-500 focus:outline-none lg:hidden'
              >
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 6H20M4 12H20M4 18H11'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
            </div>

            <div className='flex items-center'></div>
          </header>
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
