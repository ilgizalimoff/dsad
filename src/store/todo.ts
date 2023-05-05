import { makeAutoObservable } from "mobx"

class ToDo {
    _todos = [
        {
            "id": 1,
            "body": "",
            "complete": ""
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setTodos(todos: any) {
        this._todos = todos
    }

    get fetchToDos() {
        return this._todos
    }
}

export default new ToDo()