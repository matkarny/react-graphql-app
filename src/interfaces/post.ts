export interface IPost {
    id: string,
    title: string,
}

export interface IComment {
    id: string,
    name: string,
    email: string,
    body: string,
}

export interface IPostDetails{
    id: string,
    title: string,
    body: string,
    user: {
        username: string
    }
    comments: {
        data: IComment[]
    }
}

export interface IPostDetailsData{
    post: IPostDetails
}