import logo from './logo.svg';
import './App.css';
import { useSnapshot } from 'valtio';
import {
  counterStore,
  counterStoreDerived,
  socketMessageStore,
  updateCounter,
} from './store';

const CounterButton = () => {
  const counterSanpshot = useSnapshot(counterStore);

  return (
    <button type="button" onClick={updateCounter}>
      count is: {counterSanpshot.count}
    </button>
  );
};

const Display = () => {
  const counterSanpshot = useSnapshot(counterStore);

  return <p>Count {counterSanpshot.count}</p>;
};

const SocketMessage = () => {
  const socketMessageSanpshot = useSnapshot(socketMessageStore);

  return <p>Msg: {socketMessageSanpshot.msg}</p>;
};

const DoubleCount = () => {
  const counterSanpshot = useSnapshot(counterStoreDerived);

  return <p>doubleCount: {counterSanpshot.doubled}</p>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <CounterButton />
        </p>
        <Display />
        <DoubleCount />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <SocketMessage />
      </header>
    </div>
  );
}

export default App;
