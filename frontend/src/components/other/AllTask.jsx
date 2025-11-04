import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-xl font-medium w-1/5   '>Employee Name</h2>
                <h3 className='text-xl font-medium w-1/5   '>New Task</h3>
                <h5 className='text-xl font-medium w-1/5   '>Active Task</h5>
                <h5 className='text-xl font-medium w-1/5   '>Completed Task</h5>
                <h5 className='text-xl font-medium w-1/5   '>Failed Task</h5>
            </div>


            <div className='h-[80%] overflow-auto'>
                {authData.employees.map(function (elem) {
                    return <div className='border-2 border-emerald-400  mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-xl font-medium w-1/5 text-red-600'>{elem.firstName}</h2>
                        <h3 className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask }</h3>
                        <h5 className='text-xl font-medium w-1/5 text-yellow-600'>{ elem.taskCounts.active}</h5>
                        <h5 className='text-xlfont-medium  w-1/5 text-green-600'>{elem.taskCounts.completed }</h5>
                        <h5 className='text-xl font-medium w-1/5 text-red-600'>{ elem.taskCounts.failed}</h5>

                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask