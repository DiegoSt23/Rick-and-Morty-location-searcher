import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import LocationContainer from './LocationContainer';
import ResidentContainer from './ResidentContainer';
import Pagination from './Pagination';

function App() {  
  const [condition, setCondition] = useState(true)
  const [queryTerm, setQueryTerm] = useState(Math.floor(Math.random()*108));
  const [worldId, setWolrdId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");
  const [population, setPopulation] = useState("");
  const [residents, setResidents] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    setPages(Math.ceil(population / 10))
  }, [population]);

  const handlePagination = (newPage) => {
    setCurrentPage(newPage)
  };

  const search = (query) => {
    if(query > 0 && query <= 108) {
      setQueryTerm(query)
      setCondition(true)
    } else {
      setCondition(false)  
      console.log("hey!")      
    }          
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn140.picsart.com/271010551004211.png?type=webp&to=min&r=640" alt="logo"  className="relative"></img>
        <SearchBox search={search} condition={condition}/>         
        <LocationContainer worldId={worldId} name={name} type={type} dimension={dimension} population={population}/> 
        <ResidentContainer residents={residents} currentPage={currentPage}/>
        <Pagination pagesNumber={pages} onPagination={handlePagination}/>
      </header>
    </div>
  );
}

export default App;
