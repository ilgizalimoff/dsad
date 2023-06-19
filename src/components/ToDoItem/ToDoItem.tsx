import React from 'react';
import styles from './ToDoItem.module.sass';
import { observer } from 'mobx-react-lite';
import { switchComplete, removeToDo } from '../../api/ToDoService';
import { IToDoItem } from '../../const/const';
import { useAppDispatch } from '../../hook';
import { removeTodo, toggleComplete } from '../../store/todoSlice';

interface ToDoItemProps {
    todoItem: IToDoItem
    sort: boolean | string
}

const ToDoItem: React.FC<ToDoItemProps> = observer(({ todoItem, sort }) => {
    const dispatch = useAppDispatch();

    const inputOnChange = (item: IToDoItem) => {
        dispatch(toggleComplete(item.id))
    }

    const removeItem = async (id: number) => {
        dispatch(removeTodo(id))
    }

    return (
        <div
            data-testid='todoItem'
            className={styles.item}>
            <div>
                <input
                    data-testid='checkboxBtn'
                    type='checkbox'
                    checked={todoItem.complete}
                    onChange={() => inputOnChange(todoItem)} />

                <h3>{todoItem.body}</h3>
            </div>

            <button
                data-testid='removeBtn'
                onClick={() => removeItem(todoItem.id)}>
                Удалить
            </button>
        </div>
    );
})

export default ToDoItem;
