import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'; // нужно добавить эту строку
import ToDoList from "../ToDoList/ToDoList"
import * as reduxHooks from 'react-redux'
import * as actions from '../../store/todoSlice'

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

const todos = [
    {
        "id": 1683893881802,
        "body": "Сходить в магазин",
        "complete": false
    },
    {
        "id": 1683893901661,
        "body": "Помыть посуду",
        "complete": false
    }
]

describe('Проверка компонента TodoList', () => {
    it(('Проверка рендера компонента TodoList с пустым массивом данных'), () => {
        mockedUseSelector.mockReturnValue([])
        const component = render(<ToDoList />)
        expect(component).toMatchSnapshot()
    })

    it(('Проверка рендера компонента TodoList конкретным массивом данных'), () => {
        mockedUseSelector.mockReturnValue(todos)
        const component = render(<ToDoList />)
        expect(component).toMatchSnapshot()
    })

    it('Проверка рендера компонента Modal', () => {
        mockedUseSelector.mockReturnValue(todos)
        render(<ToDoList />)
        fireEvent.click(screen.getByTestId('addTodoBtn'))
        expect(screen.queryByTestId('modal')).toBeInTheDocument()
    })
})