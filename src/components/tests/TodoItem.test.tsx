import { fireEvent, render, screen } from "@testing-library/react"
import * as reduxHooks from 'react-redux'
import * as actions from '../../store/todoSlice'
import ToDoItem from "../ToDoItem/ToDoItem"

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

const todoItem =
{
    "id": 1,
    "body": "Сходить в магазин",
    "complete": false
}

describe('Тестирование компоненты TodoItem', () => {
    it('Тестирование рендера компоненты TodoItem', () => {
        mockedDispatch.mockReturnValue(jest.fn())

        const component = render(<ToDoItem todoItem={todoItem} sort={false} />)

        expect(component).toMatchSnapshot()
    })

    it('Тестирование работы dispatch actions', () => {
        const dispatch = jest.fn()

        mockedDispatch.mockReturnValue(dispatch)
        
        const mockedToggleComplete = jest.spyOn(actions, 'toggleComplete')
        const mockedRemoveTodo = jest.spyOn(actions, 'removeTodo')
      
        render(<ToDoItem todoItem={todoItem} sort={false} />)
      
        fireEvent.click(screen.getByTestId('checkboxBtn'))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedToggleComplete).toHaveBeenCalledWith(1)
       
        fireEvent.click(screen.getByTestId('removeBtn'))
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedRemoveTodo).toHaveBeenCalledWith(1)
    })
})