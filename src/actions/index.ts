'use server';

import { db } from '@/db';
import { notFound } from 'next/navigation';

export const editSnippet = async (id: number) => {
    const snippet = await db.snippet.findFirst({ where: { id } });

    if (!snippet) return notFound();

    return snippet;
};
