import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 bg-white font-bold px-10 py-5'>
        <div>
            <Link href="/" className='text-4xl font-mono'>Michał Blog
            </Link>
        </div>
        <div>Sign up!</div>
    </header>
  )
}

export default Header