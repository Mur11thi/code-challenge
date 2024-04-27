import React , {useState} from "react";
import '../Search.css'
function Search(){
 function handleSubmit(e){
e.preventDefault()
}    
 return(
  <>
  <form onClick={handleSubmit} >
  <input type="text" placeholder="Search Your Recent Transactions" className="search"/>
  <input type="Submit" value="🔎" />
  </form>
 </>   
 )
 }
 export default Search 

 