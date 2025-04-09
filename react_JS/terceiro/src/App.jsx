import "./App.css";
import { Outlet } from "react-router-dom";
//import NavBar from "./components/NavBar";
import NavBar from "./components/NewNavBar";

// importacao do react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

function App() {
  return(
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App;
