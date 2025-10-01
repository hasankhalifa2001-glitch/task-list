import { updateTask } from '@/utils/action'
import prisma from '@/utils/db'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface EditTaskPageProps {
    params: { id: string }
}

const EditTaskPage = async ({ params }: EditTaskPageProps) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!task) notFound()

    return (
        <section className='p-10'>
            <Link href={`/task/${task.id}`} className='mb-10 block text-cyan-400'>
                {'<< '}back to task details
            </Link>
            <div className='w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300'>
                <div className='text-3xl font-bold mb-7 text-gray-300'>Edit Task</div>
                <form action={updateTask} className='flex flex-col gap-6'>
                    <input type='hidden' value={task.id} name='id' />
                    <input
                        type="text"
                        placeholder='Task Title'
                        name='title'
                        className='pt-1.5 px-2 rounded-md text-gray-700 outline-none'
                        defaultValue={task.title}
                    />
                    <select
                        name="status"
                        defaultValue={task.status}
                        className='pt-1.5 px-2 rounded-md text-gray-700 outline-none'
                    >
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>

                    </select>
                    <textarea
                        rows={5}
                        name="description"
                        placeholder='Description Task'
                        className='pt-1.5 px-2 rounded-md text-gray-700 outline-none'
                        defaultValue={task.description}
                    />
                    <button
                        type='submit'
                        className='bg-cyan-300 py-2 px-4 rounded-md font-semibold'
                    >
                        Edit</button>
                </form>
            </div>
        </section>
    )
}

export default EditTaskPage