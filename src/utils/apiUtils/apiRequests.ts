import axios from 'axios';

export const getPostsData = async () => {
    try {
        const response = await axios.get('../api/posts');
        if (response.status === 200) {
            console.log('The post data was received successfully');
            return JSON.parse(JSON.stringify(response.data));
        }
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
};

export const addSubscription = async (data: { email: string | null | undefined; subscription: Object; subscribers: Object | null | undefined}) => {
    try {
        const response = await axios.post('../api/subs', data);
        if (response.status === 200) {
            console.log('Subscription added successfully');
            window.location.reload()
        }
    } catch (error) {
        console.error('Failed to add subscription:', error);
    }
};

export const deletePost = async (_id: any) => {
    try {
        const response = await axios.delete('../api/posts', { data: { _id } });
        if (response.status === 200) {
            console.log('Post deleted successfully');
            window.location.reload()
        }
    } catch (error) {
        console.error('Failed to delete post:', error);
    }
};

export const getSubs = async () => {
    try {
        const response = await axios.get('../api/subs')
        if (response.status === 200) {
            console.log('Subscriptions received successfully');
            return response.data;
        }
    }
    catch (error) {
        console.error('Failed to fetch subscriptions:', error);
    };
}

export const getPost = async ({ slug }: {
    slug: string
}) => {
    try {
        const response = await axios.get(`../api/posts/${slug}`)
        if (response.status === 200) {
            console.log('The post was received successfully');
            return response.data;
        }
    }
    catch (error) {
        console.error('An error occurred while receiving the post:', error);
    };
};

export const putPost = async ({ id, title, content }: { id: string, title: string, content: string }) => {

    try {
        const response = await axios.put(`/api/posts/${id}`, {
            title,
            content,
        });
        if (response.status === 200) {
            console.log('The post change was successful');
        }
    }
    catch (error) {
        console.error('Error changing the post:', error);
    };
}

export const addComment = async (data: { post: string , email: string, name: string, content: string}) => {
    try {
        const response = await axios.post('../api/comments', data);

        if (response.status === 200) {
            console.log('Comment added successfully');
            window.location.reload()
        }
    } catch (error) {
        console.error('Failed to add comment:', error);
    }
};

export const getComment = async ({ slug }: {
    slug: string
}) => {
    try {
        const response = await axios.get(`../api/comments/${slug}`);

        if (response.status === 200) {
            console.log('Сomments received successfully');
            return response.data;
        }
    } catch (error) {
        console.error('Error receiving receiving comments:', error);
    }
};

export const deleteComments = async ({ slug }: {
    slug: string
}) => {
    try {
        const response = await axios.delete(`../api/comments/${slug}`);
        if (response.status === 200) {
            console.log('Comments deleted successfully');
            window.location.reload()
        }
    } catch (error) {
        console.error('Failed to delete comments:', error);
    }
};

export const getTagPost = async ({ slug }: {
    slug: string
}) => {
    try {
        const response = await axios.get(`../api/tags/${slug}`);

        if (response.status === 200) {
            console.log('The posts on the tag were received successfully');
            return response.data;
        }
    } catch (error) {
        console.error('Posts by tag were received with an error:', error);
    }
};
