type Props = {
    params: Promise<{ id: string }>;
};

export default async function SnippetEditPage({ params }: Props) {
    const { id } = await params;
    return <div>Editing snippet with id : {id}</div>;
}
