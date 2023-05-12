import React from 'react';
import styles from './ToDoItem.module.sass';
import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import { switchComplete, removeToDo } from '../../api/ToDoService';
import { IToDoItem } from '../../const/const';

interface ToDoItemProps {
    todoItem: IToDoItem
    sort: boolean | string
}

const ToDoItem: React.FC<ToDoItemProps> = observer(({ todoItem, sort }) => {
    const inputOnChange = async (item: IToDoItem) => {
        await switchComplete(item)

        todo.setTodos(todo.fetchToDos
            .map(elem => elem.id === item.id ?
                { ...elem, complete: !elem.complete } : elem)
            .filter(todo => sort === 'all' ? todo : todo.id !== item.id)
        )
    }

    const removeItem = async (id: number) => {
        await removeToDo(id)
        todo.setTodos(todo.fetchToDos.filter(todo => todo.id !== id))
    }

    return (
        <div className={styles.item}>
            <div>
                <input type='checkbox'
                    checked={todoItem.complete}
                    onChange={() => inputOnChange(todoItem)} />

                <h3>{todoItem.body}</h3>
            </div>

            <span onClick={() => removeItem(todoItem.id)}>Удалить</span>
        </div>
    );
})

export default ToDoItem;
