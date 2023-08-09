export default function HobbyLinks() {
    let hobbyLinks = ["https://www.amazon.com//", "https://www.ebay.com/", "https://www.msn.com/en-us/news"];
 
    return(
       <div>
          <h3>My FAVORITE Hobbies WEBSITE links!</h3>
          <a href = {hobbyLinks[0]} target = "blank">Amazon! </a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">Ebay!</a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">MSN NEWS!</a>
       </div>
    );
 }