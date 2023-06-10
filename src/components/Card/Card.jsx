import { Link } from 'react-router-dom';
import style from './Card.module.css'



const Card = ({id, name, onClose, gender, image, species, status, origin}) => {
   return (
      <div className = {style.container}>
         <button className= {style.closeButton} onClick = {()=> onClose(id)}></button>
         <img  src={image} alt="" /> 
         <div className= {style.info}>
         <Link to= {`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>     
        
         <h2>Gender: {gender}</h2>
         <h2>Species: {species}</h2>
         <h2>Status: {status}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
           </div>
        </div> 
   );
}


export default Card