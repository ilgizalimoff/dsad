import React from 'react';
import styles from './ToDoItem.module.sass';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import { switchComplete, removeToDo } from '../../api/ToDoService';

type ToDoItemProps = {
    todoItem: any
}

const ToDoItem: React.FC<ToDoItemProps> = observer(({ todoItem }) => {
    const inputOnChange = async (item: any) => {
        await switchComplete(item)
        todo.setTodos(todo.fetchToDos.map(elem => elem.id === item.id ?
            { ...elem, complete: elem.complete === 'done' ? 'undone' : 'done' } : elem))
    }

    const removeItem = async (id: any) => {
        await removeToDo(id)
        todo.setTodos(todo.fetchToDos.filter(todo => todo.id !== id))
    }

    return (
        <div className={styles.item}>
            <div>
                <input type='checkbox'
                    checked={todoItem.complete == 'done' ? true : false}
                    onChange={() => inputOnChange(todoItem)} />

                <h3>{todoItem.body}</h3>
            </div>

            <span onClick={() => removeItem(todoItem.id)}>Удалить</span>
        </div>
    );
})

export default ToDoItem;
