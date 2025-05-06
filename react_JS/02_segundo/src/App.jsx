import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <>
        < NavBar />
        <Outlet style={{}}/>
    </>
  )
}

export default App;
