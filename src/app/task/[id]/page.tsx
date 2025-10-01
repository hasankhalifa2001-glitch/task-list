
import DeleteTask from '@/components/DeleteTask'
import StatusBadgePage from '@/components/StatusBadge'
import { deleteTask } from '@/utils/action'
import prisma from '@/utils/db'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

interface TaskDetailsPageProps {
    params: { id: string }
}


const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {

    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!task) notFound()




    return (
        <div className='text-white text-xl p-5'>
            <div className='text-lg mt-5'>
                <Link href={'/'}>{'<< '}Back to tasks table</Link>
            </div>
            <div className='mt-20 mb-5 flex justify-end items-center w-3/4 gap-5 mx-auto text-lg '>
                <Link href={`/task/${task.id}/edit`} className='bg-green-600 py-1 px-2 rounded'>Edit</Link>
                <form action={deleteTask}>
                    <input type="hidden" name='id' value={task.id} />
                    <button type='submit' className='bg-red-600 py-1 px-2 rounded cursor-pointer'>
                        Delete
                    </button>
                </form>
            </div>
            <div className='border w-3/4 mx-auto p-5 rounded-md bg-gray-700'>
                <div className='flex justify-between text-3xl'>
                    <div>{task?.title}</div>
                    <div className='text-lg'><StatusBadgePage status={task.status} /></div>
                </div>
                <div className='text-yellow-500 text-sm mt-2'>
                    {new Date(task?.createdAt).toDateString()}
                </div>
                <div className='mt-10 text-slate-200'>
                    <div>{task?.description}</div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetailsPage