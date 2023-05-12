import React, { useState } from 'react'

import styles from './Modal.module.sass'
import todo from '../../store/todo'
import { addTodo } from '../../api/ToDoService'

interface ModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ visible, setVisible }) => {
  const [additionValue, setAdditionValue] = useState('')

  const additionElement = {
    id: Date.now(),
    body: additionValue,
    complete: false
  }

  const closeModal = async () => {
    await addTodo(additionElement)
    todo.setTodos([...todo.fetchToDos, additionElement])
    setVisible(false)
  }

  return (
    <>
      {visible &&
        <div className={styles.modal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
              <input
                onChange={(e) => setAdditionValue(e.target.value)}
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