"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { CreateTaskDto } from "./dtos";
import { CreateTaskSchema } from "./validationSchema";
import toast from "react-hot-toast";
import { Status } from "@prisma/client";

// Server Actions
export async function createTask({ title, description }: CreateTaskDto) {


    if (typeof title !== "string" || title.length < 2) return
    if (typeof description !== "string" || description.length < 4) return

    try {
        await prisma.task.create({
            data: { title, description }
        })
    } catch (error) {
        throw new Error("Error creating task")
    }

    revalidatePath('/')
    redirect('/')

}


// Delete a task
export async function deleteTask(fromData: FormData) {
    const id = fromData.get('id')?.toString()
    if (!id) throw new Error("Task not found")

    try {
        await prisma.task.delete({ where: { id: parseInt(id) } })
    } catch (error) {
        throw new Error("could not delete task")
    }

    revalidatePath('/')
    redirect('/')

}

// Update a task
export async function updateTask(formData: FormData) {
    const title = formData.get('title')?.toString()
    const description = formData.get('description')?.toString()
    const status = formData.get('status') as Status
    const id = formData.get('id')?.toString()

    if (typeof title !== "string" || title.length < 2) return
    if (typeof description !== "string" || description.length < 4) return
    if (!status) return
    if (typeof id !== "string") return

    try {
        const updateTask = await prisma.task.update({
            where: { id: parseInt(id) },
            data: {
                title, description, status
            }
        })
    } catch (error) {
        throw new Error("could not update task")
    }

    revalidatePath('/')
    revalidatePath(`/task/${id}`)
    redirect(`/task/${id}`)
}