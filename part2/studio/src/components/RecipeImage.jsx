import recipedata from "./recipe.json"
function RecipeImage() {
  let recipe = recipedata[0].recipeImage 
  return <div>
    <img src={recipe} alt="recipeImage" className="recipeImage"></img>
  </div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 