import { makeAutoObservable } from "mobx"
import { IToDoItem } from "../const/const"

class ToDo {
    _todos = [
        {
            "id": 1,
            "body": "",
            "complete": false
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setTodos(todos: IToDoItem[]) {
        this._todos = todos
    }

    get fetchToDos() {
        return this._todos
    }
}

export default new ToDo()