'use client';

import { Snippet } from '@prisma/client';
import React from 'react';
import { Editor } from '@monaco-editor/react';

type Props = {
    snippet: Snippet;
};

const SnippetEditForm = ({ snippet }: Props) => {
    const [code, setCode] = React.useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    };
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
        </div>
    );
};

export default SnippetEditForm;
