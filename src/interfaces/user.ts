export interface IUserData {
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
        data: IUserData[]
    } 
}
