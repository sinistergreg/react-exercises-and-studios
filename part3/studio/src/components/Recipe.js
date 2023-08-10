const RecipeAuthor = () => {
   let authorLink = "https://www.gordonramsay.com/gr/recipes/";
   let authorPhoto = "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage160055050-50-GR-MGPW.jpg";
   let authorName = "Gordon Ramsay";

   return (
      <div>
         <img src={authorPhoto} alt = "Gordon Ramsay" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Gordon Ramsay's Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Free-range turkey", "Sea salt", "Freshly ground pepper", "Onions", "Lemon"];
   return(
      <div>
         <h3>ROAST TURKEY WITH LEMON, PARSLEY, & GARLIC</h3>
            <h4><u>Recipe Ingredients</u></h4>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
         <h5> <img src='https://www.gordonramsay.com/assets/Recipes/_resampled/CroppedFocusedImage192072050-50-Gordon-Carving-Christmas-Turkey.jpg' alt="turkey" width="350" height="245"/> </h5>
      </div>
   );
}
const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}