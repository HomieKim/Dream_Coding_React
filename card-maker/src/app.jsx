
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import LogIn from './components/login/logIn';
import Maker from './components/maker/maker';

function App({FileInput,authService}) {
  return(
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LogIn authService={authService}/>}/>
          <Route path="/maker" element={ <Maker FileInput={FileInput} authService={authService}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
