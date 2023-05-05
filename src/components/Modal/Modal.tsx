import React, { useState } from 'react'

import styles from './Modal.module.sass'
import todo from '../../store/todo'
import { addTodo } from '../../api/ToDoService'

type ModalProps = {
  visible?: boolean
  setVisible?: any
}

const Modal: React.FC<ModalProps> = ({ visible, setVisible }) => {
  const [addValue, setAddValue] = useState('')

  const addObj = {
    id: Date.now(),
    body: addValue,
    complete: 'undone'
  }

  const closeModal = async () => {
    await addTodo(addObj)
    todo.setTodos([...todo.fetchToDos, addObj])
    setVisible(false)
  }

  return (
    <>
      {visible &&
        <div className={styles.modal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
              <input
                onChange={(e) => setAddValue(e.target.value)}
                type="text"
                placeholder='Введите элемент списка' />

              <button onClick={closeModal}>Добавить</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal