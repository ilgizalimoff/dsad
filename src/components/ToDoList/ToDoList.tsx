import { useState, useEffect } from 'react';
import styles from './ToDoList.module.sass';
import ToDoItem from '../ToDoItem/ToDoItem';
import Modal from '../Modal/Modal';
import todo from '../../store/todo';
import { observer } from 'mobx-react-lite';
import { getTodosBySort } from '../../api/ToDoService';
import { options } from '../../const/const';

const ToDoList = observer(() => {
    const [visible, setVisible] = useState(false)
    const [sort, setSort] = useState('all')

    const onSelectChange = async (sortMethod: any) => {
        let currentSort = options.filter(option => option.title === sortMethod)[0].query
        setSort(currentSort)
        await getTodosBySort(currentSort).then(data => todo.setTodos(data))
    }

    useEffect(() => {
        getTodosBySort(sort).then(data => todo.setTodos(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.todo}>
                <button
                    className={styles.addBtn}
                    onClick={() => setVisible(true)}>
                    Добавить в список
                </button>

                <Modal visible={visible}
                    setVisible={setVisible} />

                <div className={styles.selectBlock}>
                    <select onChange={(e) => onSelectChange(e.target.value)}>
                        {options.map((option: any) =>
                            <option key={option.query}>
                                {option.title}
                            </option>
                        )}
                    </select>
                </div>
                
                {todo?.fetchToDos?.length === 0
                    ? <h3 className={styles.empty}>Список пуст...</h3>
                    : todo?.fetchToDos?.map(el =>
                        <ToDoItem key={el.id} todoItem={el} />
                    )
                }
            </div>
        </div>
    );
})

export default ToDoList;