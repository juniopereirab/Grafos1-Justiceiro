import { useState, useEffect } from 'react';
import './App.css';
import family from './Graph/family';
import createGraph from './Graph/Tree';

function App() {

  const [graph, setGraph] = useState({});
  const [familyObj, setFamilyObj] = useState(family);
  const [person, setPerson] = useState();

  useEffect(() => {
    const grafo = createGraph(family);
    setGraph(grafo);
    setFamilyObj(family);
  }, [])
 
  const killFamily = async () => {
    graph.BFS(person, (currentValue) => {
      if(family[currentValue].murderer){
        family[currentValue].alive = false;
        setFamilyObj(family);
        return true;
      }
      else{
        family[currentValue].alive = false;
        setFamilyObj(family);
        return false;
      }  
    });

  }

  return (
    <div className="App">
      <button onClick={() => killFamily()}>Matar</button>
      {Object.keys(familyObj).map((person, index) => (
      <div className="pessoaViva" key={index}>
        <div className="infoPessoa" onClick={() => setPerson(person)}>
          <h1>{familyObj[person].name}</h1>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
