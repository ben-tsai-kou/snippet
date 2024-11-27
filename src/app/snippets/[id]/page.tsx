import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db';

type Props = {
    params: Promise<{ id: string }>;
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

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link
                        className="p-2 border rounded"
                        href={`/snippets/${snippet.id}/edit`}
                    >
                        Edit
                    </Link>
                    <button className="p-2 border rounded">Delete</button>
                </div>
            </div>

            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>
            </pre>
        </div>
    );
}
