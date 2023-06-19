import { useState, useEffect } from 'react';
import styles from './ToDoList.module.sass';
import ToDoItem from '../ToDoItem/ToDoItem';
import Modal from '../Modal/Modal';
import { getTodosBySort } from '../../api/ToDoService';
import { options } from '../../const/const';
import { useAppSelector } from '../../hook';

type IOption = {
    title: string
    query: string | boolean
}

const ToDoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);

    const [visible, setVisible] = useState(false)

    const [sort, setSort] = useState<string | boolean>('all')

    const onSelectChange = async (sortMethod: string | boolean) => {
        // let currentSort = options.filter(option => option.title === sortMethod)[0].query
        // setSort(currentSort)
        // await getTodosBySort(currentSort).then(data => todo.setTodos(data))
    }

    useEffect(() => {
        // getTodosBySort(sort).then(data => todo.setTodos(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.todo}>
                <button
                    data-testid='addTodoBtn'
                    className={styles.addBtn}
                    onClick={() => setVisible(true)}>
                    Добавить в список
                </button>

                <Modal
                    visible={visible}
                    setVisible={setVisible} />

                <div className={styles.selectBlock}>
                    <select onChange={(e) => onSelectChange(e.target.value)}>
                        {options.map((option: IOption) =>
                            <option key={option.title}>
                                {option.title}
                            </option>
                        )}
                    </select>
                </div>

                {todos.length === 0
                    ? <h3 className={styles.empty}>Список пуст...</h3>
                    : todos.map(el =>
                        <ToDoItem key={el.id} todoItem={el} sort={sort} />
                    )
                }
            </div>
        </div>
    );
}

export default ToDoList;