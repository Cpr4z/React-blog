import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                        <Route element={route.element}
                               path={route.path}
                               exact={route.exact}
                               key={route.path}/>
                    )}
                <Route path={'*'} element={<Error/>}/>
            </Routes>
        :
            <Routes>
            {publicRoutes.map(route =>
                    <Route element={route.element}
                           path={route.path}
                           exact={route.exact}
                           key={route.path}/>
                )}
                <Route path={'*'} element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;