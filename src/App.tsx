import './App.css';
import { Board } from './features/board/Board';
import { Header } from './features/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
