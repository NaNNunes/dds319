import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Sobre from "./pages/Sobre.jsx";
import Devsys from "./pages/DevSys.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cadastro from "./pages/Cadastro.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/cursos",
                element:<Home/>
            },
            {
                path:"cadastre-se",
                element:<Cadastro/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/quemsomos",
                element:<Sobre/>
            },
            {
                path:"/cursos/tecnico-dev-sistemas",
                element:<Devsys/>
            }
        ]
    }
]);

export default router;