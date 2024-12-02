'use client';

import { Snippet } from '@prisma/client';
import React from 'react';
import { Editor } from '@monaco-editor/react';
import { editSnippet } from '@/actions';

type Props = {
    snippet: Snippet;
};

const SnippetEditForm = ({ snippet }: Props) => {
    const [code, setCode] = React.useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    };

    const editSnippetAction = editSnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="p-2 border rounded">
                    Save
                </button>
            </form>
        </div>
    );
};

export default SnippetEditForm;
