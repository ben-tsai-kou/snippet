import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippet-edit-form';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function SnippetEditPage({ params }: Props) {
    const { id } = await params;

    const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

    if (!snippet) return notFound();

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}
