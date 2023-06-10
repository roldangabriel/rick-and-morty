import Card from '../Card/Card';
import style from './Cards.module.css'

const Cards = ({characters, onClose}) => {
   return (
     <div className = {style.container}>
         {characters.map(({id, name, species, gender, image, origin,status,}) =>{
               return (
                 <Card 
                 onClose={onClose}
                 id={id}
                 name= {name}
                 species={species}
                 status={status}
                 gender={gender}
                 image={image}
                 origin={origin.name}
                 key={id}
                 />
               )
            })
         }
      </div>
   );
      }
      

export default Cards 


 














