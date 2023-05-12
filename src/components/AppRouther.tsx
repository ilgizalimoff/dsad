import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from '../const/const';

function AppRouther() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element }) =>
                    < Route key={path} path={path} element={element} />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouther;
