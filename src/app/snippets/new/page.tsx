'use client';

import { createSnippet } from '@/actions';
import React from 'react';

export default function CreateSnippetPage() {
    // useActionState 的第一個 params 是 server action function，第二個 params 是 action 的初始 state
    const [formState, action] = React.useActionState(createSnippet, {
        title: '',
        code: '',
        message: '',
    });

    return (
        <form action={action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="title" className="w-12">
                        Title
                    </label>
                    <input
                        name="title"
                        className="border rounded p-2 w-full"
                        id="title"
                        defaultValue={formState.title}
                    />
                </div>

                <div className="flex gap-4">
                    <label htmlFor="code" className="w-12">
                        Code
                    </label>
                    <textarea
                        className="border rounded p-2 w-full"
                        id="code"
                        name="code"
                        defaultValue={formState.code}
                    />
                </div>

                {formState?.message && (
                    <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
                        {formState.message}
                    </div>
                )}

                <button type="submit" className="rounded p-2 bg-blue-200">
                    Create
                </button>
            </div>
        </form>
    );
}
