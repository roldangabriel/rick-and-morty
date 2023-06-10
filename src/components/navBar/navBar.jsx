import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './navBar.module.css'
import {Link} from 'react-router-dom'

const Nav = ({onSearch}) => {

  return (
    <nav className= {style.container}>
        <SearchBar onSearch={onSearch}/>

        
    <button>
      <Link to='/about'>About</Link>
    </button>
    <button>
      <Link to='/'>Home</Link>
    </button>
    </nav>
  )
}

export default Nav;