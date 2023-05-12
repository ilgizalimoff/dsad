import { makeAutoObservable } from "mobx"
import { IUser } from "../const/const"

class ToDo {
    _users = [
        {
            "id": 1,
            "login": "",
            "password": ""
        }
    ]

    _isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setUser(users: IUser[]) {
        this._users = users
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }

    get user() {
        return this._users
    }

    get isAuth() {
        return this._isAuth
    }
}

export default new ToDo()