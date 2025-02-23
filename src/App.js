import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import styles from "./app.module.css";
import Landing from './pages/Landing';

function App() {
  
  return (
    <div className={`${styles.App} mx-1`}>
      <NavBar />
      <Container className={styles.Main}>
        <Landing />
      </Container>
    </div>
  );
}

export default App;
