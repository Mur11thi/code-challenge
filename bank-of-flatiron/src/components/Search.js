import React , {useState} from "react";
import '../Search.css'
function Search(){
 function handleSubmit(e){
e.preventDefault()

}    
 return(
  <>
  <form>
  <input type="text" placeholder="Search Your Recent Transactions" className="search"/>
  <input type="Submit" value="🔎" onSubmit={handleSubmit}/>
  </form>
 </>   
 )
 }
 export default Search 

 