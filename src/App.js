import { useState, useEffect } from 'react';
import './App.css';
import family from './Graph/family';
import createGraph from './Graph/Tree';

function App() {

  const [graph, setGraph] = useState({});
  const [familyObj, setFamilyObj] = useState(family);
  const [status, setStatus] = useState(0);

  Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  useEffect(() => {
    const grafo = createGraph(family);
    setGraph(grafo);
    setFamilyObj(family);
    console.log(family);
  }, [])

  // const timeout = (delay) => {
  //   handler = new Promise(res=> setTimeout(res, delay));
  //   return handler;
  // }

  // const clearTime = () => {
  //   return () => handler && clearTimeout(handler);
  // }
  const killFamily = (e ,person) => {
    graph.BFS(person, (currentValue) => {
      if(family[currentValue].murderer){
        family[currentValue].alive = false;
        const myDiv = document.getElementById('i'+currentValue);
        myDiv.style.backgroundColor = '#d100ca';
        console.log(family[currentValue]);
        setFamilyObj(family);
        setStatus(1);
        return true;
      }
      else{
        family[currentValue].alive = false;
        const myDiv = document.getElementById('i'+currentValue);
        myDiv.style.backgroundColor = '#e64343';
        console.log(family[currentValue]);
        setFamilyObj(family);
        setStatus(2);
        return false;
      }
    });
  }

  const getStatus = () => {
      var familyDiv = document.getElementsByClassName("family");
      switch(status) {
        case 0:
          return '...';
        case 1:  
          familyDiv[0].addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
          }, true);
          console.log(familyDiv[0]);
          return 'VENCEU';
        case 2:
          familyDiv[0].addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
          }, true);
          console.log(familyDiv[0]);
          return 'PERDEU';
        default:
          return '...';
      }
  }
  
  return (
    <div className="App">
      <h1>Justiceiro</h1>
      <div className="titles">
        <p>
          Era uma vez, um jovem viajante que tinha sede de justiça pelo mundo,
          ele descobriu que para que o mundo fosse um lugar melhor, ele teria que
          evitar que todas as guerras que acontecerem. Isso fez com que ele construisse
          uma máquina do tempo. Para viajar e "conhecer" todos os lugares que
          deram início para guerras. Ele então descobriu uma familia que deu origem
          a um dos maiores genocidas do mundo. Ele então resolveu, viajar no tempo. Matar o pai
          do assassino para que o assassino nunca chegasse a nascer e ninguém tivesse que morrer inocentemente.
          Porém, você não pode cometer os mesmos erros que ele e também matar inocentes.
          Então <span style={{color: '#FF0000'}}> TOME CUIDADO </span> com quem você mata.
          Boa sorte!!
        </p>
        <h1 
          id="statusTitle"
          style={getStatus() === "VENCEU" ? {color: '#399748' } : getStatus() === "PERDEU" ? {color: '#e64343'} : { color: 'black' }}  
        >{getStatus()}</h1>
      </div>
      <div className="family">
        {Object.keys(familyObj).map((person, index) => (
        <div className="pessoaViva" key={index} id={`i${index}`}>
          <div className="infoPessoa" onClick={(e) => killFamily(e,person)}>
            <h1>{familyObj[person].name}</h1>
          </div>
        </div>
        ))}
      </div>
      {status ? <button id="resetButton" onClick={() => {window.location.reload()}}>Reset</button> : <div id="spaceButton"/>}
    </div>
  );
}

export default App;
