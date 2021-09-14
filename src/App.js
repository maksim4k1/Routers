import AppReducers from './components/AppRouters';
import Aside from './components/Aside';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content container">
        <Aside/>
        <AppReducers/>
      </div>
    </div>
  );
}

export default App;
