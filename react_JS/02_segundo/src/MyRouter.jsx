import { createBrowserRouter } from "react-router-dom"

import App from "./App";
import PagErro from "./pages/PagErro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import InfoCard from "./componentes/InfoCard";

const router = createBrowserRouter([
    {
        path:"/",          //url
        element: <App />,  //component
        errorElement: <PagErro />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/Sobre",
                element:<Sobre />
            },
            {
                path:"/Cadastro",
                element:<Cadastro />
            },
            {
                path:"/Contato",
                element:<Contato />
            },
            {
                /* Nested Routes */
                // url/":" == variavel 
                path:"/info/:id",   
                element: <InfoCard />
            }

        ]
    },
    
]);

export default router;