import styles from './Description.module.css';

export default function RecipePhoto () {
   return (
      <img src= "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/15/1/0162941_smoked-ribs_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1371603168027.jpeg" width={700} height={700} alt="recipe photo" className = {styles.imageUpdates} />
   );
}