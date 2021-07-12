import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import LocationContainer from './LocationContainer';
import ResidentContainer from './ResidentContainer';

function App() {  
  const [queryTerm, setQueryTerm] = useState(Math.floor(Math.random()*108));
  const [worldId, setWolrdId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");
  const [population, setPopulation] = useState("");
  const [residents, setResidents] = useState([]);

  useEffect(() => {  
    if (queryTerm) {
      const func = async () => {
        const url = `https://rickandmortyapi.com/api/location/${queryTerm}`
        const response = await fetch(url).then(res => res.json())
        setWolrdId(response.id);
        setName(response.name);
        setType(response.type);  
        setDimension(response.dimension);
        setPopulation(response.residents.length);
        setResidents(response.residents)                  
      }    
      func()                 
    }  
  }, [queryTerm]);

  const search = (query) => {
    if(query > 0 && query <= 108) {
      setQueryTerm(query)
    } else {
      alert("Please enter a valid number")
    }   
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn140.picsart.com/271010551004211.png?type=webp&to=min&r=640" alt="logo"  className="relative"></img>
        <SearchBox search={search}/>   
        <LocationContainer worldId={worldId} name={name} type={type} dimension={dimension} population={population}/> 
        <ResidentContainer residents={residents}/>
      </header>
    </div>
  );
}

export default App;
