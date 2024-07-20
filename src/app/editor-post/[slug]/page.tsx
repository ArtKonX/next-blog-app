import EditorContainer from '@/components/editor/EditorContainer'

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'PostEditor',
}

type Params = {
    slug: string
}

export default function PostEditor({ params }: {params: Params}) {

    return (
       <div>
            <EditorContainer params={params}/>
       </div>
    );
}