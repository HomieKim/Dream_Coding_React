
import styles from './app.module.css';
import LogIn from './components/login/logIn';

function App({authService}) {
  return(
    <div className={styles.app}>
      <LogIn authService={authService}/>
    </div>
  );  
}

export default App;
