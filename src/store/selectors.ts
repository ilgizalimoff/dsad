import { IToDoItem } from "../const/const";

type TodosState = {
    todos: IToDoItem[];
}

export const selectTodos = (state: TodosState) => state.todos