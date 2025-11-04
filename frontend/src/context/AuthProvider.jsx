import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { createContext } from 'react'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

//  localStorage.clear()

    const [userData, setUserData] = useState(null)

   useEffect(() => {
    if(!localStorage.getItem('employees')) {
      setLocalStorage()
    }
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
   }, [])

    
    

  return (
    <div>
        <AuthContext.Provider value = {userData}>
         {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider