import logo from "./logo.svg";
import "./App.css";
import { GET_COVID_SUMMARY } from "./constants";
import axios from "axios";

function App() {
  const simpleFetch = () => {
    axios.get(GET_COVID_SUMMARY).then((response) => {
      const countries = response && response.data && response.data.Countries;
      const UkraineCovidData =
        countries &&
        countries.find((item) => item.Country.startsWith("Ukraine"));
      console.log(UkraineCovidData);
    });
  };
  return (
    <div onClick={() => simpleFetch()} className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
