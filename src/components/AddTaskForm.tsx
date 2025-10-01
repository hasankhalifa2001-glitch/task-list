"use client"

import { createTask } from '@/utils/action'
import { CreateTaskDto } from '@/utils/dtos'
import { CreateTaskSchema } from '@/utils/validationSchema'
import { error } from 'console'
import React from 'react'
import toast from 'react-hot-toast'



const AddTaskForm = () => {

    const clientAction = async (formData: FormData) => {
        const title = formData.get('title')?.toString()
        const description = formData.get('description')?.toString()

        const validation = CreateTaskSchema.safeParse({ title, description })

        if (!validation.success) return toast.error(validation.error.errors[0].message)

        await createTask({ title, description } as CreateTaskDto)
    }

    return (
        <form action={clientAction} className='flex justify-center text-black items-start flex-col '>
            <input
                type="text"
                name="title"
                id="title"
                placeholder='Task Title'
                className='border-2 rounded-md w-full py-1.5 px-2 focus:border-indigo-600 outline-none mb-10'
            />
            <textarea
                name="description"
                id="description"
                rows={5}
                placeholder='Task Description'
                className='border-2 rounded-md w-full py-1.5 px-2 focus:border-indigo-600 outline-none mb-10'
            />
            <button
                type="submit"
                className='py-2 px-4 bg-indigo-600 text-white rounded-md'
            >
                Add Task
            </button>
        </form>
    )
}

export default AddTaskForm