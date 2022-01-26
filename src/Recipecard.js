import React, { useState } from 'react';
import Recipedetails from './Recipedetails';

function Recipecard({recipe}) {
  const {ingredients} = recipe.recipe;
  const [Show, setshow] = useState();
  return (
      <div className='card shadow p-3 mb-5 bg-white rounded'><img src={recipe["recipe"]["image"]} alt="designed by Mohd Sameer" className="card-img-top"/>
      <h5 className="card-title text-center my-2 text-primary"onClick={()=>{window.open(recipe["recipe"]["url"])}}>{recipe["recipe"]["label"]}</h5>
      <button className='btn btn-outline-primary my-2 ' onClick={()=>setshow(!Show)}>Ingredients</button>
      {Show && <Recipedetails ingredients={ingredients} />}
      </div>
      ) ;
};

export default Recipecard;

