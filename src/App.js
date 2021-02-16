import './App.css';
import family from './Graph/family';

function App() {


  return (
    <div className="App">
      {family.map((person) => (
        <div className="pessoa">
        <div className="infoPessoa">
          <h1>{person.nome}</h1>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
