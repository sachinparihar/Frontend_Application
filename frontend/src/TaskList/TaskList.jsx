import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
    console.log(data);
    
    if (!data || !data.tasks) {
        return (
            <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
                <p>No tasks available</p>
            </div>
        )
    }
    
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>


            {data.tasks.map((elem, idx) => {
                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
                }
                return null;
            })}
            
           


        </div>
    )
}

export default TaskList