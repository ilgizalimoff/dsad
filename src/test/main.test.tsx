import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App';
import ToDoList from '../components/ToDoList/ToDoList';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

// // jest.mock('axios')

test('Text render', () => {
    render(<App />)
    const autorizationElem = screen.getByText(/Авторизация/i)
    expect(autorizationElem).toBeInTheDocument()
})

// test('async text render(find method)', async () => {
//     render(<App />)
//     screen.debug()
//     const autorizationElem = await screen.findByText(/state/i)
//     expect(autorizationElem).toBeInTheDocument()
//     screen.debug()
// })

// test('No in document (query method)', async () => {
//     render(<App />)
//     const autorizationElem = screen.queryByText(/Авторизац2ия/i)
//     expect(autorizationElem).toBeNull()
// })

// test('Add new Todo button click', async () => {
//     render(
//         // <MemoryRouter>
//         <ToDoList />
//         // </MemoryRouter>
//     )
//     const addTodoBtn = screen.getByTestId('addTodoBtn')
//     screen.debug()
//     expect(screen.queryByTestId('modal')).toBeNull()
//     fireEvent.click(addTodoBtn)
//     screen.debug()
//     expect(screen.queryByTestId('modal')).toBeInTheDocument()
// })