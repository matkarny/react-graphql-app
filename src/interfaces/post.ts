import { IComment } from "./comment";

export interface IPost {
    id: string,
    title: string,
    body: string
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