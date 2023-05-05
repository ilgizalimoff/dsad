import { Navigate } from "react-router-dom"
import Auth from "../components/Auth/Auth"
import ToDoList from "../components/ToDoList/ToDoList"

export const baseTodosUrl = 'http://localhost:3000/todo'
export const baseUsersUrl = 'http://localhost:3000/users'

export const options = [
    { title: 'Все', query: 'all' },
    { title: 'Выполненные', query: 'done' },
    { title: 'Невыполненные', query: 'undone' }]

export const routes = [
    { path: '/login', element: <Auth /> },
    { path: '/registration', element: <Auth /> },
    { path: '/', element: < Navigate to='/login' /> },
    { path: '/todo', element: <ToDoList /> }
]