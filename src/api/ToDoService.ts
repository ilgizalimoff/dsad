import axios from "axios"
import { IToDoItem, baseTodosUrl } from "../const/const"

export const addTodo = async (todo: IToDoItem) => {
    const response = await axios.post(baseTodosUrl, todo).catch((e) => alert(e))
    return response
}

export const getTodosBySort = async (sort: boolean | string) => {
    if (sort === 'all') {
        const response = await axios.get(baseTodosUrl).catch((e) => alert(e))
        return response?.data
    } else {
        const response = await axios.get(baseTodosUrl + '?complete=' + sort)
            .catch((e) => console.log(e))
        return response?.data
    }
}

export const switchComplete = async (item: IToDoItem) => {
    await axios.put(baseTodosUrl + '/' + item.id,
        { ...item, complete: !item.complete })
        .catch((e) => alert(e))
}

export const removeToDo = async (id: number) => {
    await axios.delete(baseTodosUrl + '/' + id).catch((e) => console.log(e))
}