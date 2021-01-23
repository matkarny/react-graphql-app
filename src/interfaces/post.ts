export interface IPost {
    id: number,
    title: string,
}

export interface IComment {
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface IPostDetails{
    id: number,
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