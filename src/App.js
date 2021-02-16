import { useState, useEffect } from 'react';
import './App.css';
import family from './Graph/family';
import createGraph from './Graph/Tree';

function App() {

  const [graph, setGraph] = useState({});

  useEffect(() => {
    const grafo = createGraph(family);
    setGraph(grafo);
  }, [])
  
  const killFamily = (person) => {
    graph.BFS(person, (currentValue) => {
      if(family[currentValue].murderer){
        family[currentValue].alive = false;
        console.log(family[currentValue]);
        console.log("assassino");
        return true;
      }
      else{
        family[currentValue].alive = false;
        console.log(family[currentValue]);
        console.log("inocente");
        return false;
      }  
    })
  }

  return (
    <div className="App">
      {Object.keys(family).map((person, index) => (
      <div className="pessoa" key={index}>
        <div className="infoPessoa" onClick={()=>killFamily(person)}>
          <h1>{family[person].name}</h1>
        </div>
      </div>
      ))}
      <button onClick={(e) => createGraph(e)}>Criar grafo</button>
    </div>
  );
}

export default App;
