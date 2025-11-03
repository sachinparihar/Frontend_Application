import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // two way binding
    const submitHander = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>

                <form onSubmit={(e) => {
                    submitHander(e)
                }}

                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required className=' border-2 outline-none bg-transparent border-emerald-600 text-xl py-4 px-4 rounded-full placeholder:text-gray-600' type="email" placeholder='Enter you email' />
                    <input
                        value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                        required className=' border-2 outline-none bg-transparent border-emerald-600 text-xl py-4 px-4 rounded-full mt-3 placeholder:text-gray-6s00' type="password" placeholder='Enter password' />
                    <button className='mt-5 text-white border-none outline-none  bg-emerald-600 text-xl py-4 px-4 rounded-full placeholder:text-white' >Log in</button>

                </form>



            </div>


        </div>
    )
}

export default Login