import { IPost } from "./post";

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string
    }
}
export interface IUsersData{
    users: {
        data: IUser[]
    } 
}

export interface IUserDetails{
    id: number,
    username: string,
    posts: {
        data: IPost[]
    }
}

export interface IUserDetailsData {
    user: IUserDetails
}