import React from 'react';
import {v4 as uuidv4} from 'uuid'

const Recipedetails = ({ingredients}) => {
  return ingredients.map(ingredient=>{
     return(
         <ul key={uuidv4()}>
             <li className='text-primary'>
                 {ingredient.original}
             </li>
         </ul>
     ); 
     }
    );
};

export default Recipedetails;
