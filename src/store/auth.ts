import { makeAutoObservable } from "mobx"

class ToDo {
    _user = [
        {
            "id": 1,
            "lgoin": "",
            "password": ""
        }
    ]

    _isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setUser(todos: any) {
        this._user = todos
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }

    get user() {
        return this._user
    }
    
    get isAuth() {
        return this._isAuth
    }
}

export default new ToDo()