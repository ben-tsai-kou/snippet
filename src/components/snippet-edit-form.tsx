'use client';

import { Snippet } from '@prisma/client';
import React from 'react';

type Props = {
    snippet: Snippet;
};

const SnippetEditForm = ({ snippet }: Props) => {
    return <div>{snippet.title}</div>;
};

export default SnippetEditForm;
