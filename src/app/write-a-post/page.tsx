import WriteAPostContainer from '@/components/write/WriteAPostContainer'

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'WritePost',
}

const PostForm = () => {

    return (
        <div>
            <WriteAPostContainer />
        </div>
    );
};

export default PostForm;