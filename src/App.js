import logo from './logo.svg';
import './App.css';
import { WorldMap } from "react-svg-worldmap";
import countries from "./Graph/countries";

function App() {
  return (
    <div className="App">
      <WorldMap color="green" size="xxl" data={countries} />
    </div>
  );
}

export default App;
