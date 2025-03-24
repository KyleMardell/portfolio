import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import styles from "./App.module.css";
import Landing from './pages/Landing';
import CV from './pages/CV';
import Projects from './pages/Projects';

function App() {
  
  return (
    <div className={`${styles.App} px-1`}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
      
        </Routes>
      </Container>
    </div>
  );
}

export default App;
