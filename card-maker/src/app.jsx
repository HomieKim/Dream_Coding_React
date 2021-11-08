
import './app.css';
import LogIn from './components/login/logIn';

function App({authService}) {
  return  <LogIn authService={authService}/>
}

export default App;
