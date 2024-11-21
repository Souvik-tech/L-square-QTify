import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import ActionAreaCard from './components/Card/Card'
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
      

      <Navbar/>
      <Hero/>
      
      <Container maxWidth="xl">
      <ActionAreaCard/>

      </Container>

    </div>
  );
}

export default App;
