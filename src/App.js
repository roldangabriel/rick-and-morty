import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/navBar/navBar.jsx';
import { useState } from 'react';
import Detail from './components/Detail/Detail.jsx';
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About.jsx';





function App () {
  const [characters, setCharacters] = useState([]); 

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id)=> {
 const newCharacters = characters.filter(character => character.id !== Number(id));
 setCharacters(newCharacters);
 }
 return (
   


  <div className="App">
      <Nav onSearch = {onSearch}/>
      <Routes>
         <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/About' element={<About/>} />
         <Route path= '/Detail/:id' element={<Detail/>} />
      </Routes>
    
    </div>
  );
}

export default App
