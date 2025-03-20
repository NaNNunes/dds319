import './App.css'
import ComponenteMotivador from './components/ComponenteMotivador';
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Imagens from './components/Imagens';
import MeuCss from './components/MeuCss';
import MyCss from './components/MyCss';

function App() {
  return (
    <>
      <FirstComponent />
      <hr />
      <ComponenteMotivador />
      <hr />
      <TemplateExpressions />
      <hr />
      <Events/>
      <hr />
      <h2>A seguir</h2>
      <Imagens/>
      <hr />
      <MeuCss/>
      <p>Escrevi no App</p>
      <MyCss/>
    </>
  )
}
export default App;