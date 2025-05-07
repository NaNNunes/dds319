import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import BarraNav from "./componentes/BarraNav";

import { AuthProvider } from "./context/UserContext";

function App() {

  return (
    <>
      <AuthProvider>
        <div className="App">
          <BarraNav/>
          <Container>
            <Outlet/>
          </Container>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
