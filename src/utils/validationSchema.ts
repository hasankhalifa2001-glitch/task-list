import { z } from "zod";


export const CreateTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title should be of type string',
    })
        .min(3, { message: 'Title should be at least 3 characters' })
        .max(20, { message: 'Title should be at most 20 characters' }),
    description: z.string({
        required_error: 'Description is required',
        invalid_type_error: 'Description should be of type string',
    })
        .min(5, { message: 'Description should be at least 5 characters' })
        .max(50, { message: 'Description should be at most 50 characters' }),
})