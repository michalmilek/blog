import React from 'react'


const Logo = (props: any) => {
    const { renderDefault, title } = props;


  return (
    <div>
        <h1 className='text-4xl font-mono'>Michał Blog</h1>
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo