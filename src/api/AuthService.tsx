import axios from "axios"
import { IUser, baseUsersUrl } from "../const/const"

export const autorization = async (login: string, password: string) => {
    const response = await axios.get(baseUsersUrl + '?login=' + login + '&password=' + password)
        .catch((e) => console.log(e))
    return response?.data
}

export const registration = async (newUser: IUser) => {
    const response = await axios.post(baseUsersUrl, newUser)
        .catch((e) => console.log(e))
    return response?.data
}