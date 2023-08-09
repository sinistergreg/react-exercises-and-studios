import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

   const ingredients = ["Spanish paprika", "ancho chili powder", "New Mexican chili powder", "ground coriander", "ground cumin", "kosher salt", "ground black pepper", "Hickory Wood Chips" ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul className = {styles.ingredientList} >
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
         </ul>
      </div>
   );
}