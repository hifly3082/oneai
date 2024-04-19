import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [auth, setAuth] = useState(false)

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  const authenticate = () => {
    setAuth(true)
    setOpen((prev) => !prev)
  }

  return (
    <div className='flex justify-between items-center bg-light rounded-b-[50px] px-9 py-5 relative'>
      {/* LOGO */}
      <Link to='/'>
        <span className='font-montserrat font-black text-[35px]'>OneAI</span>
      </Link>

      {/* SIGN IN BUTTON */}
      {!auth && (
        <button
          className='font-kraftig text-[19px] bg-transparent text-primary rounded-[50px] border-2 border-primary px-[20px] py-1 shadow-sign1'
          onClick={toggleOpen}>
          Sign in
        </button>
      )}

      {/* AUTH FORM */}
      {/* LAYOUT */}
      <div
        className={clsx(
          'bg-transparent backdrop-blur-[50px] backdrop-brightness-[1.15] flex flex-col justify-center items-center fixed z-10 top-0 left-0 w-dvw h-dvh transition-all duration-500 ease-in-out',
          open && 'translate-x-0',
          !open && 'translate-x-[200%]'
        )}>
        {/* CLOSE BUTTON */}
        <button
          className='absolute top-[22px] right-[62px] text-red-500'
          onClick={toggleOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 36 36'
            width='36'
            height='36'
            overflow='visible'
            stroke='#FC440F'
            strokeWidth='6'
            strokeLinecap='round'>
            <line x1='0' y1='0' x2='36' y2='36' />
            <line x1='36' y1='0' x2='0' y2='36' />
          </svg>
        </button>
        {/* FORM */}
        <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='grid gap-5'>
            <input
              type='text'
              placeholder='Email'
              className='font-buch text-[25px] bg-light outline-none border-2 border-text rounded-[30px] pl-5 py-1 shadow-sign2'
            />
            <input
              type='text'
              placeholder='Password'
              className='font-buch text-[25px] bg-light outline-none border-2 border-text rounded-[30px] pl-5 py-1  shadow-sign2'
            />
          </div>
          <button
            onClick={authenticate}
            className='text-signin font-dreiviertelfett text-[25px] bg-secondary py-2 px-11 rounded-[30px] shadow-sign2'>
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
export default Header
