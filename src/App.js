import logo from './logo.svg';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="title">TIC TAC TOE</h1>
        <div className="game">
        
          <Game />
        </div>
      </header>
    </div>
  );
}

export default App;
