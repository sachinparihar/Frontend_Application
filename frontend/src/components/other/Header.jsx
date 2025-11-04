import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // } else{
  //   setUsername(data.firstName)
  // }


  const logOutUser = () => {

    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl'>username</span>👋</h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg  font-bold text-white px-5 py-2 rounded-small'>Logout</button>
        
    </div>
  )
}

export default Header