import { selectTodos } from "../selectors";

describe('Redux selectors', () => {
    it(('Проверка возврата значения из состояния'), () => {
        const todos = [{ id: 123, body: 'dasda', complete: false }]

        const result = selectTodos({ todos })

        expect(result).toEqual(todos)
    })
})