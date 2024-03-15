import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
function Button(props) {
  let saveButton = props.saveButton;
  function handleClick(){
    saveButton ? alert("You are saving this pin!") : alert("You are unsaving this")
  }
   return(
   <button id={saveButton ? "saveButton":"clickedButton"} onClick={handleClick}>
    {saveButton ? "Save" : "Saved"}
   </button>
  )
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 