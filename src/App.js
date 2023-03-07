import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Layout from './components/Layout';
import SpaceApp from './components/SpaceApp';
// import SpaceApp from './components/SpaceApp';

function App() {
  return (
    <BrowserRouter>
      <SpaceApp />
    </BrowserRouter>
  );
}

export default App;
