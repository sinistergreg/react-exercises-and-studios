import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {

let authorLink = "https://www.foodnetwork.com/recipes/bobby-flay/spice-rubbed-smoked-ribs-with-maple-horseradish-baste-recipe-2013925"; 
let authorPhoto = "https://www.eluniverso.com/resizer/U-JWFbqVtKBFAc-64Gg7VMeiwqc=/1080x608/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/PHLHSKH6XZBIZGRCBUQKPX2KUU.jpg";
let authorName = "Bobby Flay";

return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} width={700} height={600} alt = "Bobby Flay" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Spice Rubbed Smoked Ribs Recipe</a> 
      </div>
   </div>
);
}



class RecipeDescription extends React.Component {

render() {
   return (
      <div> 
         <div>
            <h1>Spice Rubbed Smoked Ribs With Maple Horseradish Baste</h1>
            <p>These ribs are sooooooooo good! All your friends will agree!</p>
         </div>
         <RecipeAuthor />
      </div>
   );
}
}

export default RecipeDescription;