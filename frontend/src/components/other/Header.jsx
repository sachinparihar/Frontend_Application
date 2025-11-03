import React from 'react'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='flex items-end justify-between'>
        
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl'>{data.firstName}</span>👋</h1>
        <button className='bg-red-600 text-lg  font-bold text-white px-5 py-2 rounded-small'>Logout</button>
        
    </div>
  )
}

export default Header