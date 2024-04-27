import React , {useState} from "react";
import '../Table.css'
function Table(){
 return(
    <>
    <table>
        
    <tr className="row">
     <th className="date">Date</th>
    <th className="description">Description</th>
    <th className="category">Category</th>    
    <th className="amount">Amount</th>
    </tr>
    <tbody>
    <tr> 
    <td>2024</td>
    <td>Music </td>
     <td>News</td>
     <td>schyeah!</td>
     </tr>
    </tbody>
    </table>
    </>
 )   
}
export default Table