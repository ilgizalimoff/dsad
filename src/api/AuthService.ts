import axios from "axios"
import { baseUsersUrl } from "../const/const"

export const autorization = async (login: any, password: any) => {
    const response = await axios.get(baseUsersUrl + '?login=' + login + '&password=' + password)
        .catch((e) => console.log(e))
    return response?.data
}

export const registration = async (newUser: any) => {
    const response = await axios.post(baseUsersUrl, newUser)
        .catch((e) => console.log(e))
    return response?.data
}