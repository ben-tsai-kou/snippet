import { db } from '@/db';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function SnippetShowPage({ params }: Props) {
    const { id } = await params;

    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(id),
        },
    });

    if (!snippet) {
        return notFound();
    }

    return <div>{snippet.title}</div>;
}
