import "./styling.css"
import recipedata from "./recipe.json"
function AuthorInfo() {
  let authorName = recipedata[0].name;
  let authorImage = recipedata[0].authorImage;
  let authorSite = recipedata[0].website;
   return(
   <div>
    <img src={authorImage} className="authorImage"></img>
    <h2>{authorName}</h2>
    <a href={authorSite}>Author's site</a>
   </div>
) }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 