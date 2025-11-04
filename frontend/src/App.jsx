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

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser')
    if(savedUser){
      const userData = JSON.parse(savedUser)
      setUser(userData.role)
      if(userData.role === 'employee'){
        if(userData.data){
          setLoggedInUser(userData.data)
        } else if(authData?.employees && userData.id){
          // Restore employee from authData if data not in localStorage
          const employee = authData.employees.find(e => e.id === userData.id)
          if(employee){
            setLoggedInUser(employee)
            // Update localStorage with full employee data
            localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee, id: employee.id}))
          }
        }
      }
    }
  }, [authData])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
     
    } else if (authData?.employees) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if(employee){
        setLoggedInUser(employee)
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee',data: employee,id: employee.id}))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  
  
  


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user === 'admin' && <AdminDashboard/>}
      {user === 'employee' && loggedInUser && <EmployeeDashboard data={loggedInUser}/>}



    </>
  )
}

export default App