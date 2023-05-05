import { useState } from 'react';
import styles from './Auth.module.sass';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../store/auth';
import { registration, autorization } from '../../api/AuthService';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const isLogin = location.pathname === '/login'

    const newUser = {
        id: Date.now(),
        login: login,
        password: password
    }

    const authClick = async () => {
        try {
            if (login === '' || password === '') {
                alert('Поля не должны быть пустыми')
                return
            }

            let data

            if (isLogin) {
                data = await autorization(login, password)
                console.log(data);
                
                if (data?.length > 0) {
                    auth.setUser(data)
                    auth.setIsAuth(true)
                    alert('Вы авторизовались!!!')
                    navigate('/todo')
                } else {
                    alert('Таких пользвателей нет')
                }
            } else {
                data = await registration(newUser)
                auth.setUser(data)
                auth.setIsAuth(true)
                alert('Поздравляем с регистрацией!!!')
                navigate('/todo')
            }
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.auth}>
                <h2 className={styles.title}>
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>

                <input
                    className={styles.login}
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                    placeholder='Логин' />

                <input
                    className={styles.password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder='Пароль' />

                <button
                    className={styles.loginBtn}
                    onClick={authClick}>
                    {isLogin ? 'Войти' : 'Регистрация'}
                </button>

                {isLogin ?
                    <div className={styles.link}>
                        Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь</NavLink>
                    </div> :
                    <div className={styles.link}>
                        Есть аккаунт? <NavLink to={'/login'}>Войдите</NavLink>
                    </div>
                }
            </div>
        </div>
    );
})

export default Auth;
