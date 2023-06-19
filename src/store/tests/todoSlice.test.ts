import { addTodo, toggleComplete, removeTodo } from '../todoSlice';
import todoReducer from '../todoSlice';

describe('Проверка todoSlice', () => {
    it(('Проверка возврата store при пустом action'), () => {
        const result = todoReducer(undefined, { type: '' })
        expect(result.list).toEqual([])
    })

    it(('Проверка добавления в store нового todo item при "addTodo" action'), () => {
        const action = { type: addTodo.type, payload: 'Redux' }
        const result = todoReducer({ list: [] }, action)

        expect(result.list[0].body).toBe('Redux')
        expect(result.list[0].complete).toBe(false)
    })

    it(('Проверка изменения выполненной задачи при "toggleComplete" action'), () => {
        const todos = [{ id: 12, body: 'Иди в очко', complete: false }]
        const action = { type: toggleComplete.type, payload: 12 }

        const result = todoReducer({ list: todos }, action)

        expect(result.list[0].complete).toBe(true)
    })

    it(('Проверка удаления из store при "removeTodo" action'), () => {
        const todos = [{ id: 12, body: 'Иди в очко', complete: false }]
        const action = { type: removeTodo.type, payload: 12 }

        const result = todoReducer({ list: todos }, action)

        expect(result.list).toEqual([])
    })
})