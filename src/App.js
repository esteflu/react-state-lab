import logo from './logo.svg';
import TimerContainerClassState from './components/TimerContainerClassState'
import TimerContainerReduxState from  './components/TimerContainerReduxState'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <TimerContainerReduxState />
        <TimerContainerClassState />
      </div>
    </div>
  );
}

export default App;
