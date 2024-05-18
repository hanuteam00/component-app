import logo from './logo.svg';
import './App.css';
import Header from './header'

// The Header component is imported and used in the App component.
function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      {/* add an attribute called “qa-id” to the header component */}
      <h1 qa-id="header-component">Header Text in Testing Component</h1>
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My First Component
        </a>
      </header>
    </div>
  );
}

export default App;
