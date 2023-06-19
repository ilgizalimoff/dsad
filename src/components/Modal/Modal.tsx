import React, { useState } from 'react'

import styles from './Modal.module.sass'
import { addTodo } from '../../store/todoSlice'
import { useAppDispatch } from '../../hook'

interface ModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ visible, setVisible }) => {
  const [addValue, setAddValue] = useState('')
  const dispatch = useAppDispatch();

  const postNewTodo = () => {
    if (addValue.trim().length) {
      // dispatch(addTodo(addValue));
      // setAddValue('');
    }
    dispatch(addTodo(addValue));
    // setAddValue('');
    setVisible(false)
  }

  return (
    <>
      {visible &&
        <div data-testid='modal'
          className={styles.modal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
              <input
                onChange={(e) => setAddValue(e.target.value)}
                type="text"
                placeholder='Новый элемент' />

              <button data-testid='add' onClick={postNewTodo}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal