import React, { useState } from 'react';
import Recipedetails from './Recipedetails';

function Recipecard({recipe}) {
  const [Show, setshow] = useState();
  
  return (
      <div className='card shadow p-3 mb-5 bg-white rounded'><img src={recipe.image} alt="designed by Mohd Sameer" className="card-img-top"/>
      <h5 className="card-title text-center my-2 text-primary">{recipe.title}</h5>
      <button className='btn btn-outline-primary my-2 ' onClick={()=>setshow(!Show)}>Ingredients</button>
      {Show && <Recipedetails ingredients={recipe.missedIngredients} />}
      </div>
      ) ;
};

export default Recipecard;

