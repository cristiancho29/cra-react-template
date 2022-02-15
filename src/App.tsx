import { ReactElement } from "react";
import logo from "./logo.svg";

const App = (): ReactElement => {
  return (
    <div className="flex justify-center">
      <header className="flex flex-col items-center">
        <img src={logo} className="w-40 h-40" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
