'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export const editSnippet = async (id: number, code: string) => {
    await db.snippet.update({
        where: { id },
        data: { code },
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
    await db.snippet.delete({ where: { id } });

    revalidatePath('/');
    redirect('/');
};

export const createSnippet = async (
    formState: {
        title: string;
        code: string;
        message: string;
    },
    formData: FormData
) => {
    try {
        // check the user's inputs and make sure they're valid
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return {
                title: typeof title === 'string' ? title : '',
                code: typeof code === 'string' ? code : '',
                message: 'Title must be longer',
            };
        }

        if (typeof code !== 'string' || code.length < 3) {
            return {
                title: typeof title === 'string' ? title : '',
                code: typeof code === 'string' ? code : '',
                message: 'Code must be longer',
            };
        }

        // create a new record in the database
        await db.snippet.create({
            data: {
                title,
                code,
            },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                title: '',
                code: '',
                message: err.message,
            };
        } else {
            return {
                title: '',
                code: '',
                message: 'An error occurred',
            };
        }
    }
    revalidatePath('/');
    redirect('/');
};
