"use client"
import prisma from '@/utils/db'
import { redirect } from 'next/navigation'
import React from 'react'


interface TaskDetailsPageProps {
    taskId: number
}

const DeleteTask = ({ taskId }: TaskDetailsPageProps) => {

    const DeleteTaskHandler = async () => {


        redirect('/')
    }

    return (
        <span className='bg-red-600 py-1 px-2 rounded cursor-pointer' onClick={DeleteTaskHandler}>Delete</span>
    )
}

export default DeleteTask