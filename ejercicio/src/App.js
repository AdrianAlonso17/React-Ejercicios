import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';

function App() {
  const isLoggedIn=false;
  return (
    <div>
  {isLoggedIn ? (
    <Saludo nombre="Adrian" />
  ) : (
    <Despedida nombre="Adrian" />
  )}
</div>   
  );
}

export default App;