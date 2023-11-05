import React from 'react'

const Header = ({PageName}) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>{PageName}</h2>
        <h2>Welcome back</h2>
    </div>
  )
}

export default Header