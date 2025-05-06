import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import PaginaErro from "./pages/PaginaErro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastrarProduto from "./pages/CadastrarProduto";
import EditarProduto from "./pages/EditarProduto";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <PaginaErro/>,
        children:[
            {
                path:"/",
                element: <Login/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/cadastrar-produto",
                element: <CadastrarProduto/>
            },
            {
                path:"/editar-produto/:id",
                element: <EditarProduto/>
            },
            // {
            //     path:"/home",
            //     element: <Home/>
            // },
        ]
    }
])

export default router;