import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SpaceApp from './components/SpaceApp';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SpaceApp />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
