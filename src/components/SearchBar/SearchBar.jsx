import { useState } from 'react';
import style from './SearchBar.css'
const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('');
   const handleChange = (event) =>{
      setId(event.target.value)
      
   }
  return (
   <div className={style.container}>
      <input type = 'search' onChange={handleChange} value = {id}/>
      <button onClick={()=> onSearch(id)}>Add</button>
   </div>
   )
};



export default SearchBar;