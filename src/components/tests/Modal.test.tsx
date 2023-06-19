import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import * as reduxHooks from 'react-redux'
import * as actions from '../../store/todoSlice'
import Modal from "../Modal/Modal";

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

describe('Проверка компонента Modal', () => {
    it('Проверка работы addTodo action с конкретным вводом', () => {
        mockedUseSelector.mockReturnValue(todos)

        const dispatch = jest.fn()

        mockedDispatch.mockReturnValue(dispatch)

        const mockedAddNewTodo = jest.spyOn(actions, 'addTodo')

        render(<Modal visible={true} setVisible={jest.fn()} />)

        fireEvent.input(screen.getByPlaceholderText('Новый элемент'),
            { target: { value: 'Новое дело' } })

        fireEvent.click(screen.getByTestId('add'))

        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedAddNewTodo).toHaveBeenCalledWith('Новое дело')
    })
})