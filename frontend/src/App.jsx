import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import { useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
     
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
        console.log('Employee credentials matched:', employee)
        setUser(employee)
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify( {role: 'employee'}))
      }
   
    } 
    else {
      alert("Invalid Credentials")
    }
  }

  
  
  


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard data={loggedInUser}/>}



    </>
  )
}

export default App