

import {useState , useEffect} from "react";
import Axios from 'axios';
import Recipecard from './Recipecard';


const Recipe = () => {
  const [query, setquery] = useState("general");
  const [search, setSearch] = useState("");
  const [recipes, setrecipes] = useState([]);
  useEffect(() => {
    getrecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 },[query]);  
  var url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=d1fbb5884f9c4068b8d52598fc46b8c1`

const getrecipes =async()=>{
  var result =await Axios.get(url);
  setrecipes(result.data);
  console.log(result.data);
}
// console.log(recipes[0].image)
const updatesearch=(e)=>{
  setSearch(e.target.value); 
}
const updatequery=(e)=>{
  e.preventDefault();
  setquery(search);
  getrecipes()

}

  return <>
   
     <form onClick={updatequery} >
     <div className="row mx-4"> 
     <div className="col-md-5 my-4  text-align-center text-center">
     <h1 className='text-primary'>Food Recipe </h1>
      </div> <div className="container col-md-7 my-2">
        <div className="input-group ">
         <div className="form-outline ">
    <input type="search" id="form1" className="form-control my-3 shadow p-3 mb-5 bg-white rounded" placeholder='Ingredients' value={search} onChange={updatesearch}/>
  </div>
  <button type="button" className="btn btn-primary my-3 shadow p-3 mb-5 rounded"> Search</button>
</div>
  </div></div>


</form>
  
      <div className='container'>
      <div className="row mx-2">
        {recipes &&recipes?.map(recipe =>{
          return <div className="col-md-4 my-2" key={(recipe.id)}> <Recipecard recipe={recipe}/></div>
        })} 
      </div>
      </div>
    
  </>;
};

export default Recipe;
