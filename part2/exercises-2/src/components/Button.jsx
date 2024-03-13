import './styles.css';

function Button() {
   let onLearnMore = () => (
         alert("Splish Splash")
   )
   return ( 

         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;