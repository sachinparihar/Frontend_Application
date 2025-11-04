import React from 'react'
import Header from './Header'
import EmployeeDashboard from '../Dashboard/EmployeeDashboard'

const TaskListNumber = ({data}) => {
  console.log(data)
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

        <div className=' rounded-xl h-40 w-[45%] py-6 px-9 bg-red-300'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.newTask || 0}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>

        <div className=' rounded-xl h-40 w-[45%] py-6 px-9 bg-blue-300'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.active || 0}</h2>
            <h3 className='text-xl font-semibold'>Accepted Task</h3>
        </div>

        <div className=' rounded-xl h-40 w-[45%] py-6 px-9 bg-green-300'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.completed || 0}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>

        <div className=' rounded-xl h-40 w-[45%] py-6 px-9 bg-yellow-300'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.failed || 0}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber