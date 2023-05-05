import axios from "axios"
import { baseTodosUrl } from "../const/const"

export const addTodo = async (todo: any) => {
    const response = await axios.post(baseTodosUrl, todo).catch((e) => alert(e))
    return response
}

export const getTodosBySort = async (sort: any) => {
    if (sort === 'all') {
        const response = await axios.get(baseTodosUrl).catch((e) => alert(e))
        return response?.data
    } else {
        const response = await axios.get(baseTodosUrl + '?complete=' + sort)
            .catch((e) => console.log(e))
        return response?.data
    }
}

export const switchComplete = async (item: any) => {
    await axios.put(baseTodosUrl + '/' + item.id,
        { ...item, complete: item.complete === 'done' ? 'undone' : 'done' })
        .catch((e) => alert(e))
}

export const removeToDo = async (id: number) => {
    await axios.delete(baseTodosUrl + '/' + id).catch((e) => console.log(e))
}