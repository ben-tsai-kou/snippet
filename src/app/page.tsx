import { db } from '@/db';

export default async function Home() {
    const response = await db.snippet.findMany();

    const snippet = response.map((snippet) => {
        return (
            <div key={snippet.id}>
                <h1>{snippet.title}</h1>
                <p>{snippet.code}</p>
            </div>
        );
    });

    return <div>{snippet}</div>;
}
