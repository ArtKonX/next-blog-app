export default interface IPost {
    _id: string,
    email: string,
    name: string,
    title: string,
    content: string,
    tags: string,
    isHidden: boolean,
    createdAt: Date,
}

export default interface IPostsData {
    posts: IPost[]
}

export default interface IPostSingle {
    post: IPost
}