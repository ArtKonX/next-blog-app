import EditorPostContainer from '@/components/editor/EditorContainer'

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'PostEditor',
}

type Params = {
    slug: string
}

export default function EditorContainer({ params }: {params: Params}) {

    return (
       <div>
            <EditorPostContainer params={params}/>
       </div>
    );
}