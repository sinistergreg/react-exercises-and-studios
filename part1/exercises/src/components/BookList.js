export default function BookList() {
   let pageTitle = "My Book List";
   let book1 = "https://m.media-amazon.com/images/I/41Hi5I5ZjUL.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51LiBCJoJoL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51m+VEcmF3L.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width={400} height={400} alt="Stephen King's IT!" />
         <img src={book2} width={400} height={400} alt="Where The Red Fern Grows!" />
         <img src={book3} width={400} height={400} alt="Frog and Toad Are Friends!" />
      </div>      
   );
}