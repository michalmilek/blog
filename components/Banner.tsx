import React from 'react'

const Banner = () => {
  return (
    <nav className='bg-red-300 py-8 flex justify-between items-center px-10'>
        <div>
            <h1 className='text-2xl font-bold'>
                Michał Miłek Blog
            </h1>
            <p>Welcome to my blog! It's a test project. Just made it to put it in my repository to look bigger</p>
        </div>

        <p className='text-lg font-semibold text-gray-700'>
            Coding | Technology | And some more little things!
        </p>
    </nav>
  )
}

export default Banner