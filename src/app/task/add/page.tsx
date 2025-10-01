import AddTaskForm from '@/components/AddTaskForm';
import Link from 'next/link'
import React from 'react'


const AddTaskPage = () => {
    return (
        <div className='w-full p-5 text-white'>
            <div className='mb-20 '>
                <Link href={'/'}>{'<< '}Back To Home Page</Link>
            </div>
            <div className='flex text-center flex-col w-1/2 mx-auto border rounded-md shadow p-10'>
                <div className='mb-10 text-2xl'>Add Your Task</div>
                <AddTaskForm />
            </div>
        </div>
    )
}

export default AddTaskPage